import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

@Injectable()
export class ReportsService {
  public reports: any =
  [
    {
      id: 0,
      date: 'Sun Sep 18 2016 18:04:17 GMT+0300 (EEST)',
      total_time: 9,
      notes: 'Login&registration, Another note'
    },
    {
      id: 1,
      date: 'Fri Sep 23 2016 18:04:17 GMT+0300 (EEST)',
      total_time: 10,
      notes: 'Login&registration, Another note'
    },
    {
      id: 2,
      date: 'Mon Sep 12 2016 18:04:17 GMT+0300 (EEST)',
      total_time: 4,
      notes: 'Login&registration, Another note'
    }
  ]
  constructor() {}

  getReports() {
    return this.reports;
  }

  removeReport(id) {
    const findItem = this.reports.filter( value => value.id === id)[0];
    findItem && this.reports.splice(this.reports.indexOf(findItem), 1);
  }

  addReport(obj){
    this.reports.push(obj);
  }
}
