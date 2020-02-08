import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";

import { User } from "@/_models";
import { UserService, AuthenticationService, TaskService } from "@/_services";
import { Observable } from "rxjs";

@Component({ templateUrl: "home.component.html" })
export class HomeComponent implements OnInit {
  currentUser: User;
  data$: Observable<any>;

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
    this.data$ = this.taskService.getTask().pipe(
      map(data => {
        return JSON.stringify(data);
      })
    );
  }
}
