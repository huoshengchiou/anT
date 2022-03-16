import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private logger = environment.logger;

  log(msg: string) {
    this.logger && console.log(msg);
  }
  error(msg: string) {
    this.logger && console.error(msg);
  }
}
