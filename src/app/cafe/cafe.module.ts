import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CafeComponent} from "./cafe.component";

@NgModule({
  declarations: [CafeComponent],
  imports: [
    CommonModule
  ],
  exports: [CafeComponent]
})
export class CafeModule { }
