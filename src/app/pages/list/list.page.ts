import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  list: string[] = [];
  imageNumbers: string[] = [];

  constructor(private router: Router,
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.getList();
  }

  viewImage(numberImage: any) {
    this.imageService.selectNumber(numberImage);
    this.router.navigate(['/detail']);
  }

  getList() {
    this.imageService.geListImage().subscribe(data => {
      this.list = data.images;
      this.list.sort();
      this.imageNumbers = this.list.map((image: any) => this.extractImageNumber(image));
    },
      (error) => {
        console.error('Error al obtener la lista de imágenes:', error);
      });
  }

  extractImageNumber(imageName: string): string {
    return imageName.replace('.jpg', '');
  }

  back() {
    this.router.navigate(['/home']);
  }
}
