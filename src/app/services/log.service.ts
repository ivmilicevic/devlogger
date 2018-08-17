import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];


  constructor() {
    this.logs = [
      { id: '1', text: 'Generated components', date: new Date() },
      { id: '2', text: 'Generated services', date: new Date() },
      { id: '3', text: 'Added local storage functionality', date: new Date() },
    ]
  }

  getLogs() {
    return this.logs;
  }
}
