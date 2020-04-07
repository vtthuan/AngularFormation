import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailGuard implements CanActivate {

  constructor UserDetailGuard(private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const id = +next.url[1].path;
    console.log(`Guard ID : ${id}`);

    if (isNaN(id) || id < 1 || id > 5) {
      alert(`Identifiant d'utilisateur invalide : ${id}`);
      this.router.navigate(['/users']);
      return false;
    }
    return true;
  }
}
