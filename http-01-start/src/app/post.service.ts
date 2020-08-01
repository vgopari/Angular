import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from "@angular/common/http";

import { map, catchError, tap } from "rxjs/operators";
import { Subject, throwError, pipe } from "rxjs";

import { Post } from "./post.module";

@Injectable({
  providedIn: "root",
})
export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}
  createAnsStorePost(post: Post) {
    this.http
      .post<{ name: string }>(
        "https://angular-2bdae.firebaseio.com/posts.json",
        post,
        {
          observe: "response",
        }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchposts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.set("print", "pretty");
    searchParams = searchParams.set("custom", "key");
    return this.http
      .get<{ [key: string]: Post }>(
        "https://angular-2bdae.firebaseio.com/posts.json",
        {
          headers: new HttpHeaders({ "Custom-header": "Hello" }),
          params: new HttpParams().set("print", "pretty"),
        }
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  deletePost() {
    return this.http.delete("https://angular-2bdae.firebaseio.com/posts.json", {
      observe: "events",
      responseType: 'json'
    }).pipe(tap(event => {
      console.log(event);
      if(event.type === HttpEventType.Sent) {
        //....
      }
      if(event.type === HttpEventType.Response){
        console.log(event.body)
      }
    }));
  }
}
