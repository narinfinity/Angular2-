import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class MyService {

 constructor(private ds: DataService) {  }

 getItems() {
    return this.ds.getPosts().map(posts => {});   
 }
}