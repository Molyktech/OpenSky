import { Component, Inject, Optional, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-dialog-modal",
  templateUrl: "./dialog-modal.component.html",
  styleUrls: ["./dialog-modal.component.scss"]
})
export class DialogModalComponent implements OnInit {
  fromPage: object;
  fromDialog: string;

  constructor(
    public dialogRef: MatDialogRef<DialogModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.fromPage = data.pageValue;
  }

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close({ event: "close", data: this.fromDialog });
  }
}
