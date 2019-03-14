import { Component, OnInit } from '@angular/core';
import {UserSerService} from '../user-ser.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public arr=[];
  public data=[]; 
  public dt=null;


  constructor(private userSer:UserSerService) { 

}

  ngOnInit() { 
  
  this.dt=this.userSer.userData;
  this.userSer.getById().subscribe((res=>this.dt=res));
  }
logout(){
  this.userSer.logout(); 
}
 
}
