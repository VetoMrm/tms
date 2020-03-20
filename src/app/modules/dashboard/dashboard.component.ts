import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public openNumber: number = 5;
  public inProgress: number =35;
  public fixed: number = 15;
  public hold: number = 22;
  public closed: number = 12;
  public reOpen: number = 11;

  constructor() { }

  ngOnInit() {
  }

}
