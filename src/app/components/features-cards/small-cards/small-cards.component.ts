import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

//constant
import { CARDS } from '../../../core/constants/cards.constant';

@Component({
  selector: 'app-small-cards',
  imports: [
    MatCard,
    MatCardContent,
    MatIcon
  ],
  templateUrl: './small-cards.component.html',
  standalone: true,
  styleUrl: './small-cards.component.scss'
})
export class SmallCardsComponent {
  public cards = CARDS
}
