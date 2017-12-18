import { Component, OnInit } from '@angular/core';

import { ArticleApiService } from '../services/article-api.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

	articles: any[] = [];

  constructor( private articleThang: ArticleApiService ) { }

  ngOnInit() {

  	this.articleThang.getArticles()

  		.then((articleResults: any[]) => {
  			console.log('Article List API');
  			console.log(articleResults);

  			this.articles = articleResults;
  		})
  		.catch((err) => {
  			alert("Sorry Something went Wrong.");
  			console.log("Article List Error via article.component.ts ");
  			console.log(err);
  		})

  } // END ngOnInit()

}


/*

*/