import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyLibComponent } from "./my-lib.component";
import { DynamicModule } from "ng-dynamic-component";
import { PopoverModule } from "ngx-bootstrap/popover";

@NgModule({
  declarations: [MyLibComponent],
  imports: [DynamicModule, PopoverModule.forRoot(), CommonModule],
  exports: [MyLibComponent],
})
export class MyLibModule {}
