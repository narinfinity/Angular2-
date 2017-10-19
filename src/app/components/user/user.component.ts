import { Component, OnInit } from '@angular/core';
import * as m from '../../models/index';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: m.Address;
  hobbies: any[];
  posts: m.Post[];
  isEdit:boolean;
  constructor(private ds: DataService) {

  }

  ngOnInit() {
    this.name = 'Steve';
    this.age = 30;
    this.email = 'steve@gmail.com';
    this.address = {
      street: 'street',
      city: 'city',
      state: 'state'
    };
    this.hobbies = ['a', 1];

    this.ds.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
  onClick() {
    alert('Hello');
  }
  addHobby(hobby, e) {
    e.stopPropagation();
    e.preventDefault();

    this.hobbies.push(hobby);
    return false;
  }
  deleteHobby(hobby) {
    const index = this.hobbies.findIndex((e) => e == hobby);
    if (index > -1) this.hobbies.splice(index, 1);
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}
