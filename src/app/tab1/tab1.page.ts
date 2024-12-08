import { Component } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  imageUrl:string | null = null;

  constructor( private imageService: ImageService) {}

  getImageRandom(){
    this.imageService.getImageRandom()
    .then((response:any) => {
      this.imageUrl = response.url;
      console.log("url ==> ", this.imageUrl );
    })
  }
}
