import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-card',
  providers: [TitleCasePipe],
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() name: string = '';
  @Input() age: number | null = null;
  @Input() dni: number | null = null;

  @Output() removeCard = new EventEmitter(); 

  remove() {
this.removeCard.emit();
      }
}
