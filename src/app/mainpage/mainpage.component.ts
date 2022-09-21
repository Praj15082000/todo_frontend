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


}
