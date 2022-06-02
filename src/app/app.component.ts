import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../app/components/child/child.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(ChildComponent) view!: ChildComponent;
  title = 'arouting';
  inputname = '';

  TransferData(name: any) {
    this.inputname = name;
  }
}
