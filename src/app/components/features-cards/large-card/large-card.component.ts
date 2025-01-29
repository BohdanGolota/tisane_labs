import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-large-card',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatIcon
  ],
  templateUrl: './large-card.component.html',
  standalone: true,
  styleUrl: './large-card.component.scss'
})
export class LargeCardComponent {

}
