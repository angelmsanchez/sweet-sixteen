import { Component, Input, OnInit, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit{
  @Input() set oldName(newName: string) {
    console.log('oldName changed:', newName);
    this.oldNameFormat = newName;
  }
  @Input() set newName(newName: string) {
    console.log('NewName changed:', newName);
    this.newNameFormat.set(newName);
  }

  firstName = signal('Jane');
  lastName = signal('Doe');
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
  newNameFormat = signal('');
  oldNameFormat = '';

  constructor() {
    effect(() => {
      console.log('Name changed:', this.fullName());
    });
  }

  ngOnInit(): void {
  }

  setName(newName: string) {
    this.firstName.set(newName);
  }
}
