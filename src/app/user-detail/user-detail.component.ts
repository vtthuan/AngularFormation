import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { IUser } from '../user/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private userService : UserService, private route : ActivatedRoute) { 

  }

  user : IUser;
  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');

    this.userService.getUser(id).subscribe({
      next(user) {this.user = user}
    });

  }

}
