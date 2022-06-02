import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  // @ViewChild('home')
  // home: HomeComponent;

  userName = 'Atul';
  name = 'xyz';
  message = 'string';
  recieveMessage($event: string) {
    this.message = $event;
  }
  constructor() {
    console.log('Inside login.component.ts');
  }

  ngOnInit(): void {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    // let x = document.querySelector('#Uname').value;
    // });
  }
  ngAfterViewInit() {
    // this.message = this.home.message;
  }
}
