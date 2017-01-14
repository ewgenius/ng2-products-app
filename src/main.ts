import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

// simple scroller for hiding FAB buttons
{
  let lastScroll = 0;
  let direction = 0;
  document.onscroll = function () {
    if (document.body.scrollTop > lastScroll && direction !== 1) {
      direction = 1;
      document.body.className = 'scroll-to-bottom';
    } else if (document.body.scrollTop < lastScroll && direction !== -1) {
      direction = -1;
      document.body.className = 'scroll-to-top';
    }
    lastScroll = document.body.scrollTop;
  };
}
