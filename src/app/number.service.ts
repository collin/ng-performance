import { Injectable } from '@angular/core';
import { IntervalService } from './interval.service';

@Injectable({
  providedIn: 'root',
})
export class NumberService {
  public number: number = 0;
  constructor(private interval: IntervalService) {
    interval.interval.subscribe(() => this.number++);
  }
}
