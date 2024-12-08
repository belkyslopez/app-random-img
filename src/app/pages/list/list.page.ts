import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  images: { id: number; url: string }[] = [];
  navCtrl: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.images = [
      { id: 1, url: 'https://random-d.uk/api/1.jpg' },
      { id: 2, url: 'https://random-d.uk/api/2.jpg' },
      { id: 3, url: 'https://random-d.uk/api/3.jpg' },
    ];
  }

  viewImage() {
  //  viewImage(image: { id: number; url: string }) {
  //  this.router.navigate(['/image-view', image.id], { state: { imageUrl: image.url } });
    this.router.navigate(['/detail']);
  }

}
