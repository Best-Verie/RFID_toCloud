import { WebService } from './web.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private WebService:WebService) { }

  getAllCards(){
    return this.WebService.get("cards");
  }

  getAllTransactions(){
    return this.WebService.get("transactions");
  }
}
