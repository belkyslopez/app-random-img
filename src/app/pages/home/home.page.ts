import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

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
