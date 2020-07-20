import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyLibComponent } from "./my-lib.component";
import { PopoverModule } from "ngx-bootstrap/popover";

export const modalModuleForRoot: ModuleWithProviders<PopoverModule> = PopoverModule.forRoot();

@NgModule({
  declarations: [MyLibComponent],
  imports: [modalModuleForRoot, CommonModule],
  exports: [MyLibComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyLibModule {}
