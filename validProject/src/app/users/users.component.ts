import { Component, OnInit } from '@angular/core';
import { UserSerService } from '../user-ser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public data=[];
  constructor(private userSer:UserSerService,private routes:Router) { }

  ngOnInit() {
      this.userSer.getUserView().subscribe((res:any[])=>{
      this.data=res;
    });

  } 
  onView(u){
    this.routes.navigate(['/users',u.id]);

  }
  

}
