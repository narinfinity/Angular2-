import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  url:string = 'https://jsonplaceholder.typicode.com';
  constructor(private http: Http) {

   }
   getPosts(){
     return this.http.get(this.url + '/posts',)
     .map(res=> res.json());
   }
}
