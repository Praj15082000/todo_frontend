import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators }   from '@angular/forms'
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  todoForm : FormGroup;


  constructor(private _rest: RestService, private  _router: Router) {
    this.todoForm = new FormGroup({
      task : new FormControl('', [Validators.required])
    })

  }

  ngOnInit(): void {
  }

  add(){
    console.log(this.todoForm.value);
    if(this.todoForm.valid){
      this._rest.addTodo(this.todoForm.value).subscribe(resp => {
        console.log(resp);
        this._router.navigate(['/home'])
      }, err => {
        console.log(err);
      });

    }
    else{
      alert("Enter Valid task");
    }
  }

}
