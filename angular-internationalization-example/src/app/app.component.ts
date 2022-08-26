import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  element = false;
  title = 'angular-internationalization-example';
  todos: Todo[] = [];
  content!: string;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private todo: TodoService,
    private formBuilder: FormBuilder,
    ){}

    addTodo() {
      if(!this.content){return;}
      this.todo.add(this.content)
      .subscribe(
        todo => this.todos = [...this.todos, todo],
        error => console.error('[Todoservice.add',error)
      );
      this.content='';
    }

  public jsonBtn(){
    this.todo.getAll()
    .subscribe(
      todos => this.todos = todos,
      error => console.error('[TodoService.getAll]',error)
    );
    return (this.element = true);
  }

}
