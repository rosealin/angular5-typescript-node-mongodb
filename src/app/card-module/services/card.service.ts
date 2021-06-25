import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card, PayloadCard } from "../models/card.model"
import { Observable } from 'rxjs';

const BACKEND_URL = 'http://localhost:3000'
@Injectable()
export class CardService {

  // private cards: Card[] = []

  constructor(private http: HttpClient) { }


  get(): Observable<Card[]> {
    return this.http.get<Card[]>(`${BACKEND_URL}/123`);
  }

  add(payload: PayloadCard) {
    return this.http.post(`${BACKEND_URL}/123`, payload).subscribe(() => {
      console.log("add successfully");
    });
  }
}
