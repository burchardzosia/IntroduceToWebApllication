import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { PostAndPhotosService } from '../post-and-photos.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-photo-zoom',
  templateUrl: './photo-zoom.component.html',
  styleUrls: ['./photo-zoom.component.css']
})
export class PhotoZoomComponent implements OnInit {
  link:string="";
  id: number = 0;
  constructor(private PostandPhotosService: PostAndPhotosService,private route: ActivatedRoute) {
    
   }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.PostandPhotosService.getPhotowithID(this.id).subscribe(res => this.link=res.url)
    }

    
   
  

    
    
  
   
    }

    
  
  


