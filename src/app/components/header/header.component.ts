import { Component, computed, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatIconButton } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

const BreakpointsMap = {
  max: '(max-width: 900px)',
  min: '(min-width: 901px)', // 901px щоб уникнути конфлікту
};

@Component({
  selector: 'app-header',
  imports: [MatIcon, MatMenu, MatIconButton, MatMenuTrigger, NgIf],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private isMobileSignal = signal(false);

  isMobile = computed(() => this.isMobileSignal());

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(Object.values(BreakpointsMap)).subscribe(result => {
      this.isMobileSignal.set(result.breakpoints[BreakpointsMap.max] ?? false);
    });
  }
}
