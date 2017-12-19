import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleApiService, Article } from '../services/article-api.service';






@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

	articleInfo = new Article();
	showSection = false;
 





  constructor(
    private activatedThang : ActivatedRoute,
    private articleThang   : ArticleApiService,
    private routerThang    : Router
    ) { }






  ngOnInit() {

  	// Get the URL parameters of this route
  	this.activatedThang.params.subscribe((myReqParams) => {
  			// { path:    'articles/:id' 
  			//                      |
  			console.log(myReqParams.id);

  			this.startAjaxCall(myReqParams.id);
  	});

  } //ngOnInit()


    startAjaxCall(urlId) {
    	this.articleThang.getOneArticle(urlId)
    		.then((articleResult: Article) => {
    			// THE MAGIC HAPPENS HERE
    			// (assign API results to component property)
    			this.articleInfo = articleResult;
    		})
  		.catch((err) => {
  			alert("Sorry! Something went wrong.");
  			console.log("Article List Error");
  			console.log(err);
  		});

    } //startAjaxCall()







      showCommentSection(urlId) {

      	console.log(this.showSection);

      	

      	if ( this.showSection === true ) {
      		this.showSection = false;
      		return;
      	} 

      		this.showSection = true;
      	

      	
      	console.log(this.showSection);

      } //showCommentSection()




            
    
}
