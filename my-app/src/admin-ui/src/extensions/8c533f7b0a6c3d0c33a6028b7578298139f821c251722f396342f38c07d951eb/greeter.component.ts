import { Component } from '@angular/core';

@Component({
  selector: 'greeter',
  templateUrl: './greeter.html',
})
export class GreeterComponent {
  greeting = 'Hello!';
  message = 'Hello, World';
  canClick = false;

  checkMessage(){
    alert(this.message);
  }
}
