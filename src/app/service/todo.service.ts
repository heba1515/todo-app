import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../list-items/list-items.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }
  getAllTodos(){
    return this.httpClient.get<Todo[]>(`http://localhost:8080/jpa/users/todos`);
  }

  getTodo(id: number){
    return this.httpClient.get<Todo>(`http://localhost:8080/jpa/users/todos/${id}`);
  }

  deleteTodo(id: number){
    return this.httpClient.delete(`http://localhost:8080/jpa/users/todos/${id}`);
  }

  updateTodo(id: number, todo: Todo) {
    return this.httpClient.put(`http://localhost:8080/jpa/users/todos/${id}`, todo);
  }

  createTodo(todo: Todo) {
    return this.httpClient.post(`http://localhost:8080/jpa/users/todos`, todo);
  }

}
