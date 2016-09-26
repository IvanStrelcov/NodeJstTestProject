import { Component, OnInit, Input } from '@angular/core';
import { ReportsService }            from '../reports.service';

@Component({
  selector: '.app-report',
  templateUrl: 'report.component.html'
})
export class ReportComponent implements OnInit {
  @Input() report: any;
  private isEditTotalTime: boolean = false;
  private isEditNotes: boolean = false;
  constructor( private _reportsService: ReportsService) { }

  ngOnInit() { }

  onEditTotalTime() {
    this.isEditTotalTime = true;
  }

  onEditNotes() {
    this.isEditNotes = true;
  }

  changeNotes() {
    this.isEditNotes = false;
  }

  changeTotalTime() {
    this.isEditTotalTime = false;
  }

  onRemove(id) {
    this._reportsService.removeReport(id);
    let a = this._reportsService.getReports();
    console.log(a);
  }
}
