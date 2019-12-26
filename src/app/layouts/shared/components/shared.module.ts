import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";
import { MatDividerModule } from "@angular/material";
import { MaterialModule } from "src/app/material-module";
import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
  imports: [CommonModule, MatDividerModule, MaterialModule, FlexLayoutModule],
  exports: [HeaderComponent, SidebarComponent, FooterComponent]
})
export class SharedModule {}
