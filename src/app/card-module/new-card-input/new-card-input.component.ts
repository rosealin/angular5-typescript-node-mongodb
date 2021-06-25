import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output, HostListener, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../services/card.service';
import MyClass from '../services/my.class';

import { Location } from '@angular/common'
@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.css'],
  host: { 'class': 'col-4' }
})
export class NewCardInputComponent implements OnInit {
  newCardForm: FormGroup;

  constructor(fb: FormBuilder, private newCardService: CardService, private location: Location) {
    this.newCardForm = fb.group({
      'text': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    });
  }

  ngOnInit() {
  }

  public newCard: any = '';
  name: string = '';
  age: number = 20;
  hobby: string[] = [
    "reading", "dancing", "running"
  ]
  interests: string[] = []


  @Output() onCardAdd = new EventEmitter<any>();

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this.addCard(this.newCardForm.controls['text'].value);
    }
  }

  addCard(text) {
    this.onCardAdd.emit(text);

    this.newCardForm.controls['text'].setValue('');
  }

  async onClickMe() {
    const name = this.name;
    const age = this.age;
    let userInfo = { name: name, age: age }
    await this.newCardService.add({ ...userInfo, interests: this.interests, userInfo: userInfo });

    this.newCardService.get();
  }
  back() {
    this.location.back()
  }
  onChange(e, val) {
    if (e.checked) {
      this.interests.push(val)
    } else {
      let i = this.interests.findIndex((item) =>
        item === e.source.value
      )
      this.interests.splice(i, 1)
    }
    // console.log(this.interests)
  }
  myObj = new MyClass(12, 'zcc');
  newMyObj = new MyClass(18, 'zyy')
  testClassFunc() {
    // console.log(this.myObj)
    // console.log(this.newMyObj)
    this.myObj.name = 'ccc'
    console.log(this.newMyObj.name)
  }
}
