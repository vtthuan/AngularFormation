import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ConvertToListPipe } from './pipes/convert-to-list.pipe';
import { UserRatingComponent } from './shared/user-rating/user-rating.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CommonModule } from '@angular/common';
import { UserDetailGuard } from './user-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ConvertToListPipe,
    UserRatingComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule , CommonModule,
    RouterModule.forRoot([
      {path:'user/:id', component: UserDetailComponent, canActivate:[UserDetailGuard]},
      {path:'users', component: UserListComponent},
      
      {path:'welcome', component: WelcomeComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path:'**', redirectTo:'welcome', pathMatch:'full'}
    ],{ useHash : true} )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
