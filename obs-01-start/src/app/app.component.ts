import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  userActivated = false;
  private ActivatedSub: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.ActivatedSub = this.userService.activatedEmitter.subscribe(didActivated => {
      this.userActivated = didActivated;
    })
  }

  ngOnDestroy() {
    this.ActivatedSub.unsubscribe();
  }
}
