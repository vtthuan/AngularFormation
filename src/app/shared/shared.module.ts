import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRatingComponent } from './user-rating/user-rating.component';
import { ConvertToListPipe } from './convert-to-list.pipe';


@NgModule({
  declarations: [UserRatingComponent, ConvertToListPipe],
  imports: [
    CommonModule
  ],
  exports:[CommonModule, FormsModule, UserRatingComponent, ConvertToListPipe]
})
export class SharedModule { }
