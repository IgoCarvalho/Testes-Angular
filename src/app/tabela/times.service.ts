import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';


import { APP_API } from './../app.api';

@Injectable({
  providedIn: 'root'
})
export class TimesService {

  constructor(private http: HttpClient) { }

  times() {
    return this.http.get(`${APP_API}/tabela`);
  }
}
