import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  numberSeleted: any;

  private apiUrl = 'http://localhost:8000/api/v2';

  constructor(private http: HttpClient) { }

  getImageRandom(): Observable<any>{
      return this.http.get(`${this.apiUrl}/random`)
  }

  geListImage(): Observable<any>{
    return this.http.get(`${this.apiUrl}/list`)
  }

  selectNumber(number: any){
    this.numberSeleted= number;
  }

  getNumber(){
    return this.numberSeleted;
  }
}
