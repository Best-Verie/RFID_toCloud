import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  transactions=[
    {"id":"#245", "tagId":"6705894776890054750", "initial_balance":"2300", "transport_fare":"300","new_balance":"2000"},
    {"id":"#245", "tagId":"6705894776890054750", "initial_balance":"2300", "transport_fare":"300","new_balance":"2000"}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
