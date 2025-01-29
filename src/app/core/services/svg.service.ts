import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

// Configs
import { CSvgIcons } from '../constants/icon.constant';

@Injectable({
  providedIn: 'root'
})
export class SvgService {
  private readonly iconRegistry: MatIconRegistry = inject(MatIconRegistry);
  private readonly sanitizer: DomSanitizer = inject(DomSanitizer);

  public registryIcons(): void {
    this.registryIconsByConfigArray(CSvgIcons);
  }

  private registryIconsByConfigArray(configArray: { name: string; path: string; }[]): void {
    configArray.forEach(({ name, path }) =>
      this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(path)));
  }
}
