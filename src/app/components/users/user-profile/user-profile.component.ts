import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../services/users/user.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() user: User | undefined

  constructor() {
  }

  ngOnInit(): void {
  }

}
