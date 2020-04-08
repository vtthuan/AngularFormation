import { Component, OnInit } from '@angular/core';
import { IUserNew } from '../user-new';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor() { }

  currentUser : IUserNew =  {
    name : "us",
    age : 25,
    job : "ARC",
    rating : 2,
    jee : true,
    java : true,
    angular : true,
    kanban : true,
    cpp : false,
    javascript : false,
    junit : false,
    net : false,
    robot : false,
    scrum : false,
    selenium : false,
    soa : false,
    squash : false

  };

  ngOnInit(): void {
  }

}
