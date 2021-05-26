import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

const URL = "http://localhost:1488/http://localhost:8080/login"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(data: any) {
    return this.http.post(URL, data).pipe(map(
      response => {
        let result = JSON.parse(JSON.stringify(response))
        if (result && result.token) {
          localStorage.setItem("token", result.token)
          return true
        } else return false
      }
      )
    )
  }

}
