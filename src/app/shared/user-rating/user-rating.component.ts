import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-user-rating',
  templateUrl: './user-rating.component.html',
  styleUrls: ['./user-rating.component.css']
})
export class UserRatingComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() rating: number;
  @Input() age: number;

  statusNormal: string;
  statusEleve: string;
  statusHP: string;

  ratio: number;

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.ratio = this.age / this.rating;
  }

  ngOnInit(): void {
  }

}
