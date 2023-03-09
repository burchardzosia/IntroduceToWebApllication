import { Component, OnInit,Input } from '@angular/core';
import { PostAndPhotosService } from '../post-and-photos.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  
  constructor(private PostandPhotosService: PostAndPhotosService) { }
  photos: any[] = []
  ngOnInit(): void {
    this.PostandPhotosService.getPhotos().subscribe(data => this.photos=data)
   
  }
  clickzoom(link:any): void{
    this.PostandPhotosService.loadPhoto(link);

  }

}
