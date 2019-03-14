import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate,Router } from '@angular/router';
import {UserSerService} from './user-ser.service'

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
  constructor(private ser: UserSerService,
    private route: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('notAuthGuard');
    if(!localStorage.getItem('userid')){
      return true;
    }else{
      this.route.navigate(["dashboard"]);
      return false;
    }
  }
}