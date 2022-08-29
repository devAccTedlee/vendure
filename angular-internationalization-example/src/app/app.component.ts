import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  checkoutForm!: FormGroup;

  ngOnInit(){
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  constructor(
    private todo: TodoService,
    private formBuilder: FormBuilder,
    ){}

    addTodo() {
      if(!this.checkoutForm){return;}
      let formObj = this.checkoutForm.getRawValue();//  { name:'',address:''  }
      let serializedForm = JSON.stringify(formObj);
      // this.todo.add(this.checkoutForm.get('name')?.value )
      this.todo.add( serializedForm )
      .subscribe(
        // todo => this.todos = [...this.todos, todo],
        data => console.log("success!", data),
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
