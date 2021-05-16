import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  invalidLogin: boolean | undefined
  formGroup: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {

  }

  loginProcess(value: FormGroup) {
    console.log(value)
    if (value) {
      this.authService.login(value).subscribe(
        result => {
          if (result) this.router.navigate(["/"]).then(() => console.log("true"))
          else this.invalidLogin = true;
        }
      )
    }
  }
}

