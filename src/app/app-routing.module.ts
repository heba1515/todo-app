import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './list-items/list-items.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [

  {path:'todos', component: ListItemsComponent},

  {path:'todos/:id', component: TodoComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
