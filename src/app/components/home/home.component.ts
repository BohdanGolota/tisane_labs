import { Component } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { FeaturesComponent } from '../features/features.component';
import { FeaturesTitleComponent } from '../features-title/features-title.component';
import { ProductsCardComponent } from '../products-card/products-card.component';
import { ChipsComponent } from '../chips/chips.component';
import { HeaderComponent } from '../header/header.component';

//interfaces
import { FeatureList } from '../../core/interfaces/feature-list.interface';

//constants
import { FEATURE_LIST } from '../../core/constants/feature-list.constant';

@Component({
  selector: 'app-home',
  imports: [
    ContentComponent,
    FeaturesComponent,
    FeaturesTitleComponent,
    ProductsCardComponent,
    ChipsComponent,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public featureList: FeatureList[] = FEATURE_LIST

}
