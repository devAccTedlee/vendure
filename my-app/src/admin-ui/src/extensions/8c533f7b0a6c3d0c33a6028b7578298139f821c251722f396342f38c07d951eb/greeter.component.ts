import { Component } from '@angular/core';

@Component({
  selector: 'greeter',
  templateUrl: './greeter.html',
})
export class GreeterComponent {
  greeting = 'Hello!';
  message = 'Hello, World';
  canClick = false;
  fontColor = 'blue';
  colorAttr = 1;
 
  sayMessage() {
    alert(this.message);
  }

  checkMessage(){
    alert(this.message);
  }
}