import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';
import {UserSerService} from './user-ser.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private ser: UserSerService,
    private route: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('authGuard');
    if(localStorage.getItem('userid')!=null ){
      return true;
    }else{
      this.route.navigate(["loginPage"]);
      return false;
    }
  }
}