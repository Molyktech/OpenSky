import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { User } from "src/app/models/user";
import { Subscription } from "rxjs";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  user: User;
  currentUserSubscription: Subscription;

  constructor(private loginService: LoginService) {
    this.currentUserSubscription = this.loginService.currentUser.subscribe(
      user => {
        this.user = user;
      }
    );
  }

  ngOnInit() {
    console.log(this.user);
  }
}
