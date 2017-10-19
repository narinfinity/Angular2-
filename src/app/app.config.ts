import { InjectionToken } from '@angular/core';
import { AppConfig } from './models/app.config.model';

let APP_CONFIG = new InjectionToken<AppConfig>('app.config');
let useValue = {
    apiEndpoint: 'https://jsonplaceholder.typicode.com'
}
export {APP_CONFIG, useValue}