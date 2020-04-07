import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-root',
  template: `

  <div>

       <h1>{{title}}</h1>

       <div class="ui pointing menu">
          <a class='item' [routerLink]="['/welcome']">Home</a>
          <a class='item' [routerLink]="['/users']">Utilisateurs</a>
        </div>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ausy Skills Application';
}
