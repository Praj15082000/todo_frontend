import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
})
export class EditTodoComponent implements OnInit {
  edit_id = 4;

  editTaskForm: any = FormGroup;
  constructor(private _route: ActivatedRoute, private _rest: RestService, private _router: Router
  ) {
    this.editTaskForm = new FormGroup({
      task: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this._route.params.subscribe((param) => {
      // alert(param['id']);
      this.edit_id = Number(param['id']);
      this._rest.getSingleTasks(this.edit_id).subscribe(
        (resp: any) => {
          console.log(resp);
          this.editTaskForm.controls['task'].patchValue(resp.data[0].task);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  edit_task: any;
  update() {
    if (this.editTaskForm.valid) {
      this._rest.updateTodo(this.edit_id, this.editTaskForm.value).subscribe(
          (resp) => {
            this._router.navigate(['/home']);
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }

  // update_to(task: string) {
    // console.log(task)
    // this._rest.updateTodo(this.edit_id,this.edit_task).subscribe(resp => {
    //  console.log(resp)
    // }), (err: any) => {
    // console.log(err)
    //   }
  // }
}
