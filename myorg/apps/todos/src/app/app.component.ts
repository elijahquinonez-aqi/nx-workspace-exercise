import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from '@myorg/data';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todos';
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }
}
