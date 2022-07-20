import { Component } from '@angular/core';
import { Logger } from './logger.service';

@Component({
  selector: 'hello-world-di',
  templateUrl: './logger-di.html'
})
export class HelloWorldDependencyInjectionComponent  {
  count = 0;

  constructor(private logger: Logger) { }

  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }
}