import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { map, catchError, tap} from 'rxjs/operators'
// import { Observable, of } from 'rxjs';
// import { MessageService } from './message.service';



const endpoint = 'https://swapi.co/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  
  constructor(private http: HttpClient) { }

  getValue(type: string, term: string) {
    return this.http.get(`${endpoint}${type}/?search=${term}`, httpOptions);
  }
}
 
