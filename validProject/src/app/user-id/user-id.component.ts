import { Component, OnInit } from '@angular/core';
import { UserSerService } from '../user-ser.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
 
@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.scss']
})
export class UserIdComponent implements OnInit {

  public uId;
  public dt;
  public postt=[];
  constructor(private userSer:UserSerService,private route:ActivatedRoute,private routes:Router) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.uId=id;
    
  this.dt=this.userSer.userDet(id);
  this.userSer.userDet(id).subscribe((res=>this.dt=res));
  }
  viewPost(dt){
    this.routes.navigate(['/users',dt.id,'userPosts']);

  }
  }
