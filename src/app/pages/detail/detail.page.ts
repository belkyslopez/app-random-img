import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss']
})
export class DetailPage {

  imageNumber: number = 0;
  imageUrl: string = '';

  constructor(private route: ActivatedRoute,
    private imageService: ImageService,
    private router: Router,
  ) {}

  ngOnInit() {
  this.imageNumber = this.imageService.getNumber();
  this.imageUrl = `https://random-d.uk/api/${this.imageNumber}.jpg`;

}

back(){
  this.router.navigate(['/list']);
}

}
