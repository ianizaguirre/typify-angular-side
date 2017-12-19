import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { NotFoundComponent } from './not-found/not-found.component';





const routes: Routes = [
	{ path: '',           component:  HomePageComponent },
	{ path: 'article',           component:  ArticleComponent }, //Article List
	// { path: 'phones',     component:  PhoneListComponent },
	 { path: 'articles/:id', component:  ArticleDetailsComponent },
	// { path: 'join',       component:  JoinPageComponent },

	{ path: '**',         component:  NotFoundComponent }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }