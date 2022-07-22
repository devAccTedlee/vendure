import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
  writeCount(count: number) {
    console.warn(count);
  }
}