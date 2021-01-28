import { Component, Input, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-simple-component',
  template: `
    {{numberService.number}}
  `,
  styles: [
    `
      :host {
        display: inline;
      }
    `
  ],
  providers: [NumberService]
})
export class SimpleComponentComponent {

  constructor(public numberService: NumberService) { }

}
