import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { Card } from "../models/card.model"
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  public cards: Card[] = [];
  constructor(private cardService: CardService, private router: Router) {
    cardService.get().subscribe((cards: Card[]) => this.cards = cards);
  }

  ngOnInit() {
  }

  createUser(){
    console.log(this.router)
    this.router.navigate(["/user/new-user"]);
  }


}
