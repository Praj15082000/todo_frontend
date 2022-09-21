import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http: HttpClient) {

}
getAllTasks(){
  return this._http.get('http://localhost:9000/get_all');
}
}
