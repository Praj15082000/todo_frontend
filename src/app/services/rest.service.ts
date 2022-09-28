import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RestService {
  url = environment.url;
  constructor(private _http: HttpClient) {}
  // getAllTasks(){
  //   return this._http.get('http://localhost:9000/get_all');
  // }

  getAllTasks() {
    return this._http.get(this.url + '/get_all');
  }

  getSingleTasks(id: number) {
    return this._http.get(environment.url + '/get_todo_by_id/' + id);
  }

  doneTodo(id: number, status: number) {
    return this._http.put(environment.url + '/done_todo/' + id, {
      status: status,
    });
  }
  updateTodo(id: number, task: any) {
    return this._http.put(environment.url + '/update_todo/' + id, task);
  }

  deleteTodo(id : number){
    return this._http.delete(environment.url + '/delete_todo/' + id);
  }

  addTodo(task: any) {
    return this._http.post(environment.url + '/add_todo', task );
  }
}
