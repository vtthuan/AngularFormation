import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { UserListComponent } from '../user-list/user-list.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';
import { UserAddComponent } from './user-add/user-add.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent, UserAddComponent],
  imports: [
    SharedModule,
    UserRoutingModule,
    NgbModule
  ]
})
export class UserModule { }
