import { Component, Input, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

const MAX_DEPTH = 7;
const WIDTH = 25;
const DEPTHS = 2;

@Component({
  selector: 'app-deep-tree',
  template: `
    <p>Deep Tree! {{ depth }} ({{ number }})</p>
    <ng-container *ngIf="goDeeper">
      <app-deep-tree *ngFor="let x of depths" [depth]="nextDepth"></app-deep-tree>
    </ng-container>
    <app-simple-component *ngFor="let y of simples;"></app-simple-component>
  `,
  styles: [
    `
      :host {
        display: block;
        margin-left: 1rem;
      }
    `,
  ],
  providers: [NumberService],
})
export class DeepTreeComponent implements OnInit {
  @Input() depth: number = 0;
  public simples = Array(WIDTH).fill(null);
  public depths = Array(DEPTHS).fill(null);

  constructor(private numberService: NumberService) {}

  get nextDepth() {
    return this.depth + 1;
  }

  get goDeeper() {
    return this.depth < MAX_DEPTH;
  }

  get number() {
    return this.numberService.number;
  }

  ngOnInit(): void {}
}
