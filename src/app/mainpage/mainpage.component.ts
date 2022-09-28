import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

 todos : any[] = [];
  constructor(private _rest: RestService) { }

  ngOnInit(): void {
    this.getAllTodos();
  }


  getAllTodos(){
    this._rest.getAllTasks().subscribe((resp: any)=>{
      console.log(resp);
      this.todos = resp.data;
    },
    (err)=>{console.log(err);
    });
  }

  done(event : any, id : number)
  {
   console.log(id, event.target.checked);
   const status = event.target.checked ? 1 : 0;
   this._rest.doneTodo(id, status).subscribe((resp) => {
    console.log(resp);
    this.getAllTodos();
   }, err => {
    console.log(err)
   }
   )
  }

  delete(id: number){
    this._rest.deleteTodo(id).subscribe(resp => {
      console.log(resp);
      this.getAllTodos();
    } , err => {
      console.log(err)
    })
  }

}

// alert("hello")
