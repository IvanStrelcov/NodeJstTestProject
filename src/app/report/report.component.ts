import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  public upToDate: boolean = false;
  public upToTime: boolean = false;
  public rows: any =
  [
    {
      date: 'Sun Sep 18 2016 18:04:17 GMT+0300 (EEST)',
      total_time: 9,
      notes: 'Login&registration, Another note'
    },
    {
      date: 'Fri Sep 23 2016 18:04:17 GMT+0300 (EEST)',
      total_time: 10,
      notes: 'Login&registration, Another note'
    },
    {
      date: 'Mon Sep 12 2016 18:04:17 GMT+0300 (EEST)',
      total_time: 4,
      notes: 'Login&registration, Another note'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  sortByDate() {
    if (!this.upToDate) {
      this.rows = this.rows.sort( (a, b) => { return Date.parse(a.date) - Date.parse(b.date) });
      this.upToDate = true;
    } else {
      this.rows = this.rows.sort( (a, b) => { return Date.parse(b.date) - Date.parse(a.date) });
      this.upToDate = false;
    }
  }

  sortByTime() {
    if (!this.upToTime) {
      this.rows = this.rows.sort( (a, b) => { return (a.total_time) - (b.total_time) });
      this.upToTime = true;
    } else {
      this.rows = this.rows.sort( (a, b) => { return (b.total_time) - (a.total_time) });
      this.upToTime = false;
    }
  }
}
