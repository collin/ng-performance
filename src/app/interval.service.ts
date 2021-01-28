import { Injectable } from '@angular/core';
import { animationFrameScheduler, interval, Observable, of, scheduled, Subject } from 'rxjs';
import { repeat, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class IntervalService {
  public interval: Observable<number> = new Subject<number>();

  constructor() {
    console.count("Interval Service Constructed");
    // interval.next(0)
    this.interval = scheduled([0], animationFrameScheduler).pipe(repeat(), map((n) => n++))
  }



}
