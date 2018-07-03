import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})

export class CommunityComponent implements OnInit {
  posts: any;
  AddComment:string;
  comments: any;
  postdetails: any;
  authorization: string = localStorage.getItem('userAccessToken');
  display = 'none';
  showmodal = false;
  postimageurl: string;
  closeResult: string;
  likesCount:number=0;
  isLiked:boolean;
  isFlagged:boolean;
  postId:number;
  isClicked:boolean=false;
  searchParam: string = null;
  likesCountMap: any = {};
  showImageDetails: Boolean = false;
  Content:any;
  constructor(private modalService: NgbModal, private http: HttpClient,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchParam = params['search'];
    });
  }

  doGetpost() {
    let url = 'http://18.144.43.217:9090/anseladams/api/posts';

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authorization
      })
    };

    this.http.get(url, httpOptions).subscribe(res => {
      this.posts = res;
       console.log(this.posts);
      //  console.log(this.reports[0].communityImage.latitude
      //  );

      const likesCountMapTemp: any = {};
      this.posts.forEach(function (value) {
        // console.log(value);
        likesCountMapTemp[value['postId']] = value['likesCount'];
      });

      this.likesCountMap = likesCountMapTemp;
    });
  }

  doGetpostByName(searchParam) {
    let url = 'http://18.144.43.217:9090/anseladams/api/posts/' + searchParam + '/search';

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authorization
      })
    };

    this.http.get(url, httpOptions).subscribe(res => {
      this.posts = res;
       console.log(this.posts);
      //  console.log(this.reports[0].communityImage.latitude
      //  );
    });
  }

  getLikesOnHoverByPostId(postId) {
    this.likesCount = this.likesCountMap[postId];
  }
  getcomment(postid) {
    console.log(postid);
    this.postId = postid;
    let url = 'http://18.144.43.217:9090/anseladams/api/posts/';

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authorization
      })
    };
    console.log(httpOptions);
    this.http.get(url + postid, httpOptions).subscribe(res => {
      this.postdetails = res;
    console.log(this.postdetails);
    this.likesCount=this.postdetails.likesCount;
    console.log(this.likesCount);
    this.isLiked=this.postdetails.isLiked;
    this.isFlagged=this.postdetails.isFlagged;
    //if(content) {
      //this.Content = content;
      // this.open(content);
      this.showImageDetails = true;
      this.http.get(url + postid + '/' + 'comments', httpOptions).subscribe(res => {
        this.comments = res;
        console.log(this.comments);
      });
    //}
    });
 }
  submit(commentContent) {
    if (commentContent == '' || commentContent == null) {
      return;
    }
    let url = 'http://18.144.43.217:9090/anseladams/api/posts';
    console.log(commentContent)
        const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': this.authorization
          })
        };
        let body = new FormData();
        body.append('commentContent', commentContent);
        
       console.log(httpOptions);
      const req=  this.http.post(url + '/'+ this.postId + '/comments',body,httpOptions ).subscribe(res=>{
          console.log(res);
        });
        // this.open(this.Content);
  }

open(content) {
  this.modalService.open(content).result.then((result) => {
    this.closeResult = `Closed with: `;
  }, (reason) => {
    this.closeResult = `Dismissed`;
  });
}
  like(postId) {
    event.preventDefault();
    event.stopPropagation();
    if(!this.isLiked) {
    this.likesCount++
    } else {
      this.likesCount--;
    }
    let url = 'http://18.144.43.217:9090/anseladams/api/posts';
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authorization
      })
    };
    this.http.patch(url+ '/' + postId + '/like',null, httpOptions).subscribe(response =>{
        console.log(response);
        this.likesCount = response['likesCount'];
        this.likesCountMap[response['postId']] = response['likesCount'];
    });
    this.isLiked=!this.isLiked;
    
  } 
 
  flag() {
    let url = 'http://18.144.43.217:9090/anseladams/api/posts';
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authorization
      })
    };
   
   if(!this.isFlagged){
     this.isFlagged=true;
   }
    this.http.patch(url+ '/' + this.postId + '/flag',null, httpOptions).subscribe(response =>{
      console.log(response);
    })
  location.reload();
  
  }

  ngOnInit() {

    if (this.searchParam != null && this.searchParam != '') {
      this.doGetpostByName(this.searchParam);
    } else {
      this.doGetpost();
    }
  }
}