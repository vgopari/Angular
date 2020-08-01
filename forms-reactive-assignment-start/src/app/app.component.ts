import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  projectStatuses = ["Stable", "Critical", "Finished"];
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectname: new FormControl(null, Validators.required, this.projectNameValidation),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectstatus: new FormControl("Critical"),
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  projectNameValidation(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value.toLowerCase() === "vamshi") {
          resolve({ 'ProjectNameIsForbidden': true });
        } else {
           resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
