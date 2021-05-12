import {Component, Input, OnInit} from '@angular/core';
import {User, UserService} from "../../../services/users/user.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  users: User[] | undefined
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(response => this.users = response)
  }

}
