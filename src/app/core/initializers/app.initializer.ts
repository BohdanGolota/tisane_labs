// Services
import { SvgService } from '../services/svg.service';

// Types
import { TArrowFunction } from '../types/global.types';

export function initializeApplication(svgService: SvgService): TArrowFunction<Promise<boolean>> {
  return () => new Promise((resolve) => {
    svgService.registryIcons();
    resolve(true);
  });
}
