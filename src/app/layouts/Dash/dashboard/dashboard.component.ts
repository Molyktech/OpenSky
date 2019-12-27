import { Component, OnInit } from "@angular/core";
import { FlightsService } from "src/app/services/flights.service";
import * as data from "./flights.json";

import { MatDialog } from "@angular/material";
import { DialogModalComponent } from "../../dialog-modal/dialog-modal.component.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  flights: any;
  topTenStates: any;
  dialogValue: string;
  sendValue: object;

  constructor(
    private flightService: FlightsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getFlights();
  }

  async getFlights() {
    const flights = [];
    // const res = await fetch("https://opensky-network.org/api/states/all", {
    //   mode: "no-cors"
    // });
    // const fr = await res.json();
    // console.log(JSON.stringify(fr));
    flights.push(...data.states);
    const flightState = [];
    flights.forEach(flight => {
      flightState.push(flight[2].toLowerCase());
    });
    const highestState = this.sortByFrequencyAndFilter(flightState);
    this.topTenStates = highestState.slice(0, 10);
  }

  sortByFrequencyAndFilter(array) {
    const frequency = {};

    array.forEach(value => {
      frequency[value] = 0;
    });

    const uniques = array.filter(value => {
      return ++frequency[value] == 1;
    });

    return uniques.sort((a, b) => {
      return frequency[b] - frequency[a];
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogModalComponent, {
      width: "250px",
      
    
      data: { pageValue: this.sendValue }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed", result);
      this.dialogValue = result.data;
    });
  }
}

// to get all flights at the current time of click, an api call has to be made wih time parameter
// icao address is located at index 0
// departing flights is vertical rates with positive index
// arriving flights is vertical rates with negaive index
//
