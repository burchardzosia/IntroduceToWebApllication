import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'responseType': 'json'
});


@Injectable({
  providedIn: 'root'
})

export class PostAndPhotosService {
  
  link:string="";
  constructor(private httpClient: HttpClient) { }
  configUrl = 'https://jsonplaceholder.typicode.com/posts';
  configUrl2='https://jsonplaceholder.typicode.com/photos';
  configUrl3='https://jsonplaceholder.typicode.com/photos/';
  getPosts(): Observable<JSON[]> {
    return this.httpClient.get<JSON[]>(this.configUrl);
    }

  addPost(data: string): Observable<any>{
    return this.httpClient.post(this.configUrl, { SomeDate: data }, { headers: headers })
  }
  getPhotos(): Observable<JSON[]> {
    return this.httpClient.get<JSON[]>(this.configUrl2);
    }
  loadPhoto(link: string): void{
    this.link=link
    console.log(this.link)
  }
  getloadPhoto(): string{
    return this.link;
  }
  getPhotowithID(id: number): Observable<any>{
    this.configUrl3=this.configUrl3+id.toString();
    return this.httpClient.get<any>(this.configUrl3)
  }


  
}
