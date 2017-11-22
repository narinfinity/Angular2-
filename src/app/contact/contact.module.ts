import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ContactRoutingModule } from './contact.routing.module';
import { ContactComponent } from './contact.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ],
  declarations: [ContactComponent/*SomeDirective, SomePipe*/],
  exports: [ContactComponent],
  providers: []
})
export class ContactModule { }
