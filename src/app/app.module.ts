import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MatDialogModule } from "@angular/material";
import { LoginComponent } from "./login/login.component";

import { fakeBackendProvider } from "./utils/fake-backend";
import { ErrorInterceptor } from "./utils/error-interceptor";
import { LayoutModule } from "./layouts/layout/layout.module";
import { DialogModalComponent } from "./layouts/dialog-modal/dialog-modal.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, DialogModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatDialogModule
  ],
  entryComponents: [DialogModalComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
