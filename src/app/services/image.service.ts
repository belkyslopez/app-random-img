import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  title = 'proxy';

  private apiUrl = 'https://random-d.uk/api/v2';

  constructor(private http: HttpClient) { }


  async getImageRandom(){
    const dummy = {
      "message": "Powered by random-d.uk",
      "url": "https://random-d.uk/api/176.jpg"
  }

  return of(dummy)
}
  /*    return new Promise( resolve =>{
      this.http.get(`${this.apiUrl}/random`)
      .subscribe( resp =>{
        if (resp) {
          console.log(" getImageRandom", resp)
           resolve(true);
        }else{
           resolve(false);
        }
      });
    });*/


  async geListImage(){
    return new Promise( resolve =>{
     this.http.get(`${this.apiUrl}/list`)
     .subscribe( resp =>{
       if (resp) {
         console.log(" geListImage", resp)
          resolve(true);
       }else{
          resolve(false);
       }
     });
   });
 }
}
