import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	// { path: '',           component:  HomePageComponent },
	// { path: 'phones',     component:  PhoneListComponent },
	// { path: 'phones/:id', component:  PhoneDetailsComponent },
	// { path: 'join',       component:  JoinPageComponent },

	{ path: '**',         component:  NotFoundComponent }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }