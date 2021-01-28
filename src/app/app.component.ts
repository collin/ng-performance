import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-root',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-deep-tree></app-deep-tree>
  `,
  styles: [''],
})
export class AppComponent {
  title = 'performance';
  items = Array(10000).fill(null);
}
