import {enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {APP_ROUTER_PROVIDERS} from './routes';
import {HTTP_PROVIDERS} from '@angular/http';

import {AppComponent} from './app/app.component';

if ('prod' === ENV) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS
]);
