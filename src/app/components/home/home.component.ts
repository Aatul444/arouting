import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // firstName: string | undefined;
  // constructor(private firstName: string) {
  //   this.firstName = '';
  // }

  ngOnInit(): void {}
  message: string = 'Hola monda';
  @Output() messageEvent = new EventEmitter<string>();
  constructor() {}
  sendmessage() {
    this.messageEvent.emit(this.message);
  }
}
