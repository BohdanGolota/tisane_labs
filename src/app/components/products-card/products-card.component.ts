import { Component } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-products-card',
  imports: [
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardTitle
  ],
  templateUrl: './products-card.component.html',
  standalone: true,
  styleUrl: './products-card.component.scss'
})
export class ProductsCardComponent {

}
