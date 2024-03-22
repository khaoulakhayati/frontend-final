import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserDto } from '../../models/UserDto';
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})



export class UserlistComponent implements OnInit  {
  first: number = 0;
  rows: number = 10;
  users: UserDto[] = [];
  currentUser: [] =[] ; 

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();

    this.userService.getCurrentUser()
    .subscribe(user => { 
      this.currentUser = user;
      console.log(user);
    });
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (e) => console.error(e)
    });
  }
}