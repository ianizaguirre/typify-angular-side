import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';




export class Article {
  image     : string;
	title     : string;
  intro     : string;
	lines     : string[];

	// these are assigned by the database
	_id       : string;
	createdAt : string;
	updatedAt : string;
}



@Injectable()
export class ArticleApiService {

  constructor(private httpThang: HttpClient) { }


  // GET    /api/articles
  getArticles() {
  	return this.httpThang.get(
  	  `${environment.backendUrl}/api/articles`
  	  ).toPromise();
  }1


  // POST /api/phones
  // GET /api/phones/:id
  // DELETE /api/phones/:id

}

