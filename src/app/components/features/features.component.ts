import { Component } from '@angular/core';
import { LargeCardComponent } from '../features-cards/large-card/large-card.component';
import { SmallCardsComponent } from '../features-cards/small-cards/small-cards.component';

@Component({
  selector: 'app-features',
  imports: [
    LargeCardComponent,
    SmallCardsComponent
  ],
  templateUrl: './features.component.html',
  standalone: true,
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
}
