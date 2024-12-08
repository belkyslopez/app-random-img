import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = 'https://random-d.uk/api/v2';

  constructor(private http: HttpClient) { }


  async getImageRandom(){
     return new Promise( resolve =>{
      this.http.get(`${this.apiUrl}/random`)
      .subscribe( resp =>{
        if (resp) {
          console.log(" getImageRandom")
           resolve(true);
        }else{
           resolve(false);
        }
      });
    });
  }
}
