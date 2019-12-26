import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";

// tslint:disable-next-line: max-line-length
const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImRlbW8iLCJwYXNzd29yZCI6ImRlbW8iLCJhZG1pbiI6dHJ1ZSwian
RpIjoiYzgwNDgzOGUtZjg4Ni00NDk1LWE4MTMtYjFmOWIwMzRmMjBiIiwiaWF0IjoxNTc3Mzc1MzMyLCJleHAiOjE1NzczNzg5NTl9.RI3G3LnUeKMITM4ajjQs-yuBGTbZnMdw3juXKAU0aqM`;

// array in local storage for registered users
const users = JSON.parse(localStorage.getItem("users")) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(authenticate))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function authenticate() {
      if (url.endsWith("/api/authenticate") && method === "POST") {
        const { username, password } = body;

        if (username === "demo" && password === "demo") {
          return ok({
            status: 200,
            id: 1,
            username,
            token
          });
        }

        return error("Username or password is incorrect");
      }

      // helper functions

      function ok(body?) {
        return of(new HttpResponse({ status: 200, body }));
      }

      function error(message) {
        return throwError({ error: { message } });
      }

      function unauthorized() {
        return throwError({ status: 401, error: { message: "Unauthorised" } });
      }

      function isLoggedIn() {
        return headers.get("Authorization") === `Bearer ${token}`;
      }
    }
  }
}
export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
