import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user',  component: UserComponent },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  { path: 'about',     component: AboutComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}