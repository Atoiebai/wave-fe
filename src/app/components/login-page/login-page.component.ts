import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  invalidLogin: boolean | undefined
  formGroup: FormGroup =
    this.fb.group({
      username: ['', Validators.required],
      password: ['' , Validators.required]
    });


  constructor(private authService: AuthService,
              private router: Router ,
              private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
       username: ['', Validators.required],
       password: ['' , Validators.required]

     })
  }

  get username() {
    return this.formGroup.get('username')
  }

  get password() {
    return this.formGroup.get('password')
  }

  loginProcess(value: FormGroup) {
    console.log(value)
    if (value) {
      this.authService.login(value).subscribe(
        result => {
          if (result) this.router.navigate(["/"]).then(() => alert("login successfully"))
          else this.invalidLogin = true;
        }
      )
    }
  }
}

