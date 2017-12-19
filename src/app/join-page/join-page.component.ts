import { Component, OnInit } from '@angular/core';

import { UserApiService } from '../services/user-api.service';

@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.css']
})
export class JoinPageComponent implements OnInit {

	showSection = false;

  constructor(private userThang: UserApiService) { }

  ngOnInit() {
  }


  toggleJoinSection(urlId) {

  	console.log(this.showSection);

  	
  	if ( this.showSection === true ) {
  		this.showSection = false;
  		return;
  	} 

  		this.showSection = true;
  	

  	console.log(this.showSection);

  } //showCommentSection()

}
