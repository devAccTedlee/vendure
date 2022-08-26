import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, Observer, throwError } from 'rxjs';
import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root'
})

// const headers = new HttpHeaders({
//   'Content-type' :' application/json',
//   'Authorization':'my-auth-token'
// });

// const params = new HttpParams()
// .set('id','1')
// .set('completed','false');
// // this.http.get(this.url)
// // .subscribe(todos=> this.todos = todos); //compile error data type is Object

// // this.http.get<Todo[]>(this.url , { headers, params})

export class TodoService {
  url = "http://localhost:3000/todos";
  // url = "https://stdpay.inicis.com/stdjs/INIStdPay.js";

  constructor(public http:HttpClient){}
  
  
  
  getAll(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.url)
    .pipe(catchError(this.handleError));
  }

  add(content: string): Observable<Todo>{
    const payload = { content, complete: false };
    return this.http.post<Todo>(this.url,payload)
    .pipe(catchError(this.handleError));
  }

  private handleError(error:HttpErrorResponse){
    let message = '';

    //checking error type
    if(error.error instanceof ErrorEvent){
      //client side
      console.error(`Client-side error occurred : ${error.error.message}`);
      message = error.error.message;
    }else{
      //server side
      console.error(`Server-side error occurred : ${error.status}`);
      message=error.message;
    }

    return throwError({
      title: 'Something was WRONG!!',
      message
    });
  }
}
