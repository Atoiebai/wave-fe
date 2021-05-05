import { Component, OnInit } from '@angular/core';
import {User, UserService} from "../../../services/users/user.service";

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.scss']
})
export class DisplayUsersComponent implements OnInit {
  users: User[] | undefined
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(response => this.users = response)
  }

}
