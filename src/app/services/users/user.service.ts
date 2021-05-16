import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

export const usersURL = "http://localhost:1488/http://localhost:8080/api/blog/users"

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
  private url: string = usersURL

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url, this.addHeaders())
  }

  addHeaders() {
    let token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders().set("Authorization", "Bearer " + token)
    };
  }

}
