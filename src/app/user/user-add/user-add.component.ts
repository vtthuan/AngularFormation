import { Component, OnInit } from '@angular/core';
import { IUserNew } from '../user-new';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {


  constructor(private userService: UserService) { }

  error: boolean;
  errorMessage: string ;

  currentUser: IUserNew = {
    age : null,
    angular : null,
    cpp : null,
    java : null,
    javascript : null,
    jee : null,
    job : null,
    junit : null,
    kanban : null,
    name : null,
    net : null,
    rating : null,
    robot : null,
    scrum : null,
    selenium : null,
    soa : null,
    squash : null
  };

  jobs: object[];

  ngOnInit(): void {
     this.userService.getJobs().subscribe(result => { console.log(result); this.jobs = result; });
  }

  public handleError(err: any) {
    this.errorMessage = err.statusText;
    this.error = true;
  }

  onSubmit(form: NgForm): void {

    if (form.valid) {
      this.userService.postNewUser(form.value).subscribe(
        result => console.log('success: ', result),
        error => this.handleError(error));
    } else {
      this.error = true;
      this.errorMessage = 'Saisir tous les champs';
    }

  }

}
