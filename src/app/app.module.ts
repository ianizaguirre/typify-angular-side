import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ArticleApiService } from './services/article-api.service';
import { UserApiService } from './services/user-api.service';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { JoinPageComponent } from './join-page/join-page.component';
import { LoginComponent } from './join-page/login/login.component';
import { SignupComponent } from './join-page/signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomePageComponent,
    ArticleComponent,
    ArticleDetailsComponent,
    JoinPageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ArticleApiService,
    UserApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
