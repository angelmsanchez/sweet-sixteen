import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  firstName = signal('Jane');
  lastName = signal('Doe');
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  constructor() {
    effect(() => {
      console.log('Name changed:', this.fullName());
    });
  }

  setName(newName: string) {
    this.firstName.set(newName);
  }
}
