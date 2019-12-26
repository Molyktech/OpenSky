import { Injectable } from "@angular/core";
import { environment } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class FlightsService {
  public api = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getFlightsForAllStates() {
    return this.http.get(`${this.api}/states/all`);
  }
}
