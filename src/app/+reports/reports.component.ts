import { Component, OnInit } from '@angular/core';
import { ReportsService }     from './reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  public upToDate: boolean = false;
  public upToTime: boolean = false;
  public reports: any;
  constructor( public _reportsService: ReportsService) { }

  ngOnInit() {
    this.reports = this._reportsService.getReports();
  }

  sortByDate() {
    if (!this.upToDate) {
      this.reports = this.reports.sort( (a, b) => { return Date.parse(a.date) - Date.parse(b.date) });
      this.upToDate = true;
    } else {
      this.reports = this.reports.sort( (a, b) => { return Date.parse(b.date) - Date.parse(a.date) });
      this.upToDate = false;
    }
  }

  sortByTime() {
    if (!this.upToTime) {
      this.reports = this.reports.sort( (a, b) => { return (a.total_time) - (b.total_time) });
      this.upToTime = true;
    } else {
      this.reports = this.reports.sort( (a, b) => { return (b.total_time) - (a.total_time) });
      this.upToTime = false;
    }
  }

  addReport() {
    this._reportsService.addReport({id: Math.random(), date: new Date(), total_time: 0, notes: ''});
  }
}
