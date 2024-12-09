import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Image, ListImage } from '../interface/image';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  numberSeleted: number = 0;

  private apiUrl = 'http://localhost:8000/api/v2';

  constructor(private http: HttpClient) { }

  getImageRandom(): Observable<Image> {
    return this.http.get<Image>(`${this.apiUrl}/random`)
  }

  geListImage(): Observable<ListImage> {
    return this.http.get<ListImage>(`${this.apiUrl}/list`)
  }

  selectNumber(number: number) {
    this.numberSeleted = number;
  }

  getNumber(): number {
    return this.numberSeleted;
  }
}
