
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
 selector: 'app-report',
 templateUrl: './report.component.html',
 styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
 optionspan = "false";
 NoOfReport:number; 
 reports:any;
 flagging:any;
authorization:string=localStorage.getItem('userAccessToken');

 constructor(private http: HttpClient) { 
 }
 doGet() {
   let url = 'http://18.144.43.217:9090/anseladams/api/posts/flagged';
   
   const httpOptions = {
     headers: new HttpHeaders({
       'Authorization': this.authorization
     })
   };
   console.log(httpOptions);
   
   this.http.get(url, httpOptions).subscribe(res => {
    this.reports=res;
     console.log(res);
    this.NoOfReport=this.reports.length;
    //  console.log(this.reports[0].communityImage.latitude
    //  );
   });
}
  Unflag(postId){
    console.log("Unflagging");
    let url = 'http://18.144.43.217:9090/anseladams/api/posts';
    console.log("postId=" +postId);
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authorization
      })
    };

    console.log(httpOptions);

    this.http.patch(url+ '/' + postId + '/unflag', null, httpOptions).subscribe(response =>{
      this.flagging=response;
      console.log(this.flagging);
      location.reload();
    })
    
  }
  ArchivePost(postId){
    let url = 'http://18.144.43.217:9090/anseladams/api/posts';
    console.log("postId=" +postId);
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authorization
      })
    };
      this.http.patch(url+ '/' + postId + '/archive',null, httpOptions).subscribe(response =>{
      this.flagging=response;
      location.reload();
    })
    
  }
 ngOnInit() {
   this.doGet();
   }
  }