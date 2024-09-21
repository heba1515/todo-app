import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Todo } from '../list-items/list-items.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  id : number = 1;
  todo: Todo = new Todo(1, "", false);

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, "", false);

    if(this.id!=-1){
      this.todoService.getTodo(this.id).subscribe(
        data => this.todo = data
      );
    }

  }

  saveTodo() {
    if(this.id==-1){
      this.todoService.createTodo(this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )} else {
      this.todoService.updateTodo(this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }

  }

}
