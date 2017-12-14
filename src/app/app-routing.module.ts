import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';





const routes: Routes = [
	{ path: '',           component:  HomePageComponent },
	{ path: 'article',           component:  ArticleComponent },
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