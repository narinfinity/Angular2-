import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as m from '../models/index';

import { APP_CONFIG } from '../app.config';

@Injectable()
export class DataService {
  url: string;
  constructor(
    private http: Http,
    @Inject(APP_CONFIG) config: m.AppConfig
  ) {
      this.url = config.apiEndpoint;
  }
  getPosts() {
    return this.http.get(this.url + '/posts', {}).map(res => res.json());
  }
}
