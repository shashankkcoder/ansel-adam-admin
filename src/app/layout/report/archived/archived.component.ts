import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.scss']
})
export class ArchivedComponent implements OnInit {
  NoOfArchived:number;
  archived:any;
  restored:any;
  authorization:string=localStorage.getItem('userAccessToken');
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.doGetArchived();
  }
  doGetArchived(){
    let url = 'http://18.144.43.217:9090/anseladams/api/posts/archive';

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authorization
      })
    };
    this.http.get(url,httpOptions).subscribe(res =>{
      this.archived=res;
      this.NoOfArchived=this.archived.length;
      
    })
  }
  doRestore(postId){
    console.log(postId);
    let url= 'http://18.144.43.217:9090/anseladams/api/posts/';
    const httpOptions= {
      headers: new HttpHeaders({
        'Authorization': this.authorization
      })
    };
    this.http.patch(url + postId + '/' +'unarchive',null,httpOptions).subscribe(response =>{
      this.restored=response;
      location.reload();
    })
  }

}
