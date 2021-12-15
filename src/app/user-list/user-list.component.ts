import { Component, OnInit } from '@angular/core';
import { IUserList } from '../service/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  userList: IUserList;
  constructor(private service: UserService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.service.usersList().subscribe((data: IUserList) => {
      console.log('DATA_USER:>', data);
      this.userList = data;
    })
  }


}
