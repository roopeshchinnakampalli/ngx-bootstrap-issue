import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyLibComponent } from "./my-lib.component";
import { PopoverModule } from "ngx-bootstrap/popover";

@NgModule({
  declarations: [MyLibComponent],
  imports: [PopoverModule.forRoot(), CommonModule],
  exports: [MyLibComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyLibModule {}
