import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  pageTitle = 'Liste des utilisateurs';
  imageSize = 50;
  showRating = false;
  errorMessage: string;

  _userFilter: string;
  get userFilter(): string {
    return this._userFilter;
  }
  set userFilter(value: string) {
    this._userFilter = value;
    this.filteredUsers = this._userFilter ? this.performFilter(this._userFilter) : this.users;
  }

  filteredUsers: IUser[];
  users: IUser[] = [];

  toggleRating(): void {
    this.showRating = !this.showRating;
  }

  constructor(private userService: UserService) {
    this._userFilter = '';
  }

  performFilter(filterBy: string): IUser[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter((user: IUser) =>
          user.userName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: users => {
        this.users = users;
        this.filteredUsers = this.users;
      },
      error: err => this.errorMessage = err
    });
  }
}
