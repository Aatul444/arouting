import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName = 'Atul';
  name = 'xyz';
  constructor() {
    console.log('Inside login.component.ts');
  }

  ngOnInit(): void {}
}
