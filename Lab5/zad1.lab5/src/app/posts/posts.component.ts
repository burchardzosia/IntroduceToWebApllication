import { Component, OnInit } from '@angular/core';
import { PostAndPhotosService } from '../post-and-photos.service';
import { FormGroup, FormControl, FormBuilder  } from '@angular/forms';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  counter=0;
  constructor(private PostAndPhotosService: PostAndPhotosService) { }
  posts: any[]=[];
  PostForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    userId: new FormControl('')
  })
  ngOnInit(): void {
    this.PostAndPhotosService.getPosts().subscribe(data => this.posts=data)

  }
  sendData(): void{
    this.counter+=1;
    let data = {
      "userId": this.PostForm.get('userId')!.value,
      "id": 100+this.counter,
      "title": this.PostForm.get('title')!.value,
      "body": this.PostForm.get('content')!.value
    }
    this.PostAndPhotosService.addPost(JSON.stringify(data)).subscribe(res => this.posts.splice(0, 0, data))
    this.PostForm.reset();
  }

}
