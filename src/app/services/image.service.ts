import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  title = 'proxy';

  private apiUrl = 'https://random-d.uk/api/v2';

  constructor(private http: HttpClient) { }


  async getImageRandom(){
     return new Promise( resolve =>{
      this.http.get(`${this.apiUrl}/random`)
      .subscribe( resp =>{
        if (resp) {
          console.log(" getImageRandom", resp)
           resolve(true);
        }else{
           resolve(false);
        }
      });
    });
  }

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
