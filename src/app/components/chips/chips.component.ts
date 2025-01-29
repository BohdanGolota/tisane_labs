import { Component, Input } from '@angular/core';
//interfaces
import { FeatureList } from '../../core/interfaces/feature-list.interface';

@Component({
  selector: 'app-chips',
  imports: [],
  templateUrl: './chips.component.html',
  standalone: true,
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {
  @Input() featureList: FeatureList[] = []
}
