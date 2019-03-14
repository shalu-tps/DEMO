import { Component, OnInit } from '@angular/core';
import { UserSerService } from '../user-ser.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  public postt;
  constructor(private userSer:UserSerService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.userSer.userD(this.route.snapshot.paramMap.get('id')).subscribe((res : any[])=>{
      this.postt=res;
      this.userSer.postData=this.postt;
   }); }
  }
