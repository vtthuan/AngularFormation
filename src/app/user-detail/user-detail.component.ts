import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { IUser } from '../user/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private userService : UserService, private currentRouter: Router, private route : ActivatedRoute) { 

  }

  currentUser : IUser;
  errorMessage: string;
  
  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');

    this.userService.getUser(id).subscribe({
      next(user) {this.currentUser = user},
      error: err => (this.errorMessage = err)
    });

  }

  onHome() : void {
    this.currentRouter.navigate(['/']);
  }

  onBack() : void {
    this.currentRouter.navigate(['/users']);
  }

}
