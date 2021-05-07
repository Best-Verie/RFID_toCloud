import { CardService } from './../../services/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  transactions:any=[];
  constructor(private CardService:CardService) { }

  getAllTransactions(){
    return this.CardService.getAllTransactions().subscribe((res)=>{
      this.transactions = res;
      console.log(this.transactions);
    })
  }



  ngOnInit(): void {
    this.getAllTransactions();
  }

}



