import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  currentUser: IUser;
  errorMessage: string;

  constructor(
    private router: ActivatedRoute,
    private currentRouter: Router,
    private userService: UserService
  ) {

  }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    console.log(`ID de l'utilisateur ${id}`);

    this.userService.getUser(id).subscribe({
      next: user => (this.currentUser = user),
      error: err => (this.errorMessage = err)
    });
  }

  onBack(): void {
    this.currentRouter.navigate(['/users']);
  }

  onHome(): void {
    this.currentRouter.navigate(['/home']);
  }
}
