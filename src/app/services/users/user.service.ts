import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


export interface User {
  id: number
  username: string
  email: string
  age: number
  sex: string
  firstName: string
  lastName: string
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = "http://localhost:8080/api/blog/users"
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
   return  this.http.get<User[]>(this.url)
  }

}
