import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  { path : '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'home', component : MainpageComponent},
  {path : 'add', component : AddtodoComponent},
  {path : 'edit/:id', component : EditTodoComponent},
  {path: "**",  redirectTo : 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
