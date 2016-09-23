import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { ReportComponent } from './report.component';
import { RowComponent }    from './row';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ReportComponent, RowComponent ],
  exports: [ ReportComponent ]
})
export class ReportModule { }
