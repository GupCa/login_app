import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";

import { User } from "@/_models";
import { UserService, AuthenticationService, TaskService } from "@/_services";

@Component({ templateUrl: "home.component.html" })
export class HomeComponent implements OnInit {
  currentUser: User;
  data = {};

  constructor(
    private authenticationService: AuthenticationService,
    private taskService: TaskService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.simpleCall();
  }

  private simpleCall() {
    this.taskService
      .getTask()
      .pipe(first())
      .subscribe(data => (this.data = data));
  }
}
