import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarMenu: EventEmitter<any> = new EventEmitter();
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  toggleSideBar() {
    this.toggleSideBarMenu.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }

  signOut() {
    this.loginService.logOut();
    this.router.navigate(["/"]);
  }
}
