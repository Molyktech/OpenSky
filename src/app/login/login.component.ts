import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from "../services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  errorMessage: string;
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }

  get f() {
    return this.loginForm.controls;
  }
  get username() {
    return this.loginForm.get("username");
  }

  get password() {
    return this.loginForm.get("password");
  }

  login() {
    this.submitted = true;
    this.errorMessage = "";
    if (this.loginForm.invalid) {
      return;
    }
    // show loader
    this.loading = true;
    this.loginService.login(this.username.value, this.password.value).subscribe(
      res => {
        this.loading = false;
        if (res === null) {
          this.errorMessage = "Error invalid login details";
        } else {
          this.router.navigate(["/layout"]);
        }
      },
      error => {
        this.loading = false;
        this.errorMessage = `An error occured: ${error}`;
      }
    );
  }
}
