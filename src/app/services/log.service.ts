import { Injectable } from '@angular/core';
import { Log } from '../models/Log';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({ id: null, text: null, date: null });
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      { id: '1', text: 'Generated components', date: new Date() },
      { id: '2', text: 'Generated services', date: new Date() },
      { id: '3', text: 'Added local storage functionality', date: new Date() },
    ]
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }
}
