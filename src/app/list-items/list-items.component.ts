import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    ) { }
}
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent implements OnInit {

  todos: Todo[] = []
  message:string=""

  constructor(
    private todoService:TodoService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.getAllTodos().subscribe(
      response => {
        console.log(response)
        this.todos = response
        this.todos.sort((a, b) => a.done === b.done ? 0 : a.done ? 1 : -1);
      }
    )
  }

  deleteToDo(id: number, description: string): void {
    console.log(`to do delete ${id}`);
    this.todoService.deleteTodo(id).subscribe(
      response => {
        console.log(response);
        this.message = `Todo ID: ${id} - ${description} Deleted Successfully`;
        this.refreshTodos();
      },
      error => {
        console.error(error);
      }
    );
  }

  updateToDo(id: number): void {
    console.log(`to do delete ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }

}
