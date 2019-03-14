import { Component, OnInit } from '@angular/core';
import { UserSerService } from '../user-ser.service';
import {ActivatedRoute} from '@angular/router';
import { IPosts } from 'src/app/emp';

@Component({
  selector: 'app-post-comment', 
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {
 
  public cmnt=[];
  public array: IPosts[];
  public uId;
  public user;
  public data=[]; 
  public dt=[]; 
 public postD;
  constructor(private userSer:UserSerService,private route:ActivatedRoute) {
   
  }   
  
  ngOnInit() {
  //   this.userSer.comments().subscribe((res : any[])=>{ 
  //     this.cmnt=res;
  //  }); 
   let id=parseInt(this.route.snapshot.paramMap.get('id'));
   this.uId=id;
//    console.log(this.userSer.getComment(this.uId).subscribe((res:any[]) => {
//     this.cmnt = res;
// }));
this.userSer.getComment(id).subscribe((res:any[])=>{
  this.cmnt=res;
});

this.userSer.postDet(id).subscribe((res:any)=>{
  this.postD=res;
});

  }
}
