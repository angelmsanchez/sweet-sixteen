import { Component, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent {
  count = signal(0);
  count$ = toObservable(this.count);
  countSignal = toSignal(this.count$);

  ngOnInit() {
    this.count$.subscribe(() => {
      console.log('Count changed:', this.count());
    });
  }
}


