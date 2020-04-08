import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserDetailGuard } from '../user-detail.guard';
import { UserListComponent } from '../user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';


@NgModule({
  declarations: [],
  imports: [    
    RouterModule.forChild([
      {path:'user/:id', component: UserDetailComponent, canActivate:[UserDetailGuard]},
      {path:'users', component: UserListComponent},
      {path:'userAdd', component: UserAddComponent}
    ]),
  ], 
  exports : [RouterModule]
})
export class UserRoutingModule { }
