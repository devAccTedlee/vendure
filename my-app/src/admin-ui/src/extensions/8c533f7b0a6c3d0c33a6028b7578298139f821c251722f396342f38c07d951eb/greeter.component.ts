import { Component } from '@angular/core';

@Component({
  selector: 'greeter',
  template: `<h1>{{ greeting }}</h1>
  <button
    [disabled]="canClick"
    (click)="checkMessage()">
    Trigger alert message
  </button>`,
})
export class GreeterComponent {
  greeting = 'Hello!';
  message = 'Hello, World';
  canClick = false;

  checkMessage(){
    alert(this.message);
  }
}
