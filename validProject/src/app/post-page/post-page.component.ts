import { Component, OnInit } from '@angular/core';
import { UserSerService } from '../user-ser.service';
import { Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {User} from '../user';
@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',

  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  public postD;
  public user;
  public arr=[]; 
  public data=[];
  public i;
  public uId;
  public pt=[];
  userModel= new User('','','',''); 
  constructor(public userSer:UserSerService,private router:ActivatedRoute,private route:Router) { 
   this.userSer.postPage();
   
  }
 
  ngOnInit() { 
    if(this.userSer.postData.length==0){
   this.userSer.postPage().subscribe((res : any[])=>{
    this.postD=res;
    this.userSer.postData=this.postD;
 }); }
  }
//  if(this.userSer.postData.length==0){
//  this.userSer.postDet().subscribe((res:any[])=>{
//    this.userSer.postData=res;
//  });
//   }
// let id=parseInt(this.router.snapshot.paramMap.get('id'));
// this.uId=id;

// this.userSer.postDet(id).subscribe((res:any)=>{
//   this.postD=res;
// });
// }

  onSelect(ps){ 
    this.route.navigate(['/postPage',ps.id]);

  }
  onRemove(ps,index){
   
    // let i=this.userSer.postData.indexOf(this.userModel);
    // console.log(i);
    // this.userSer.postData.splice(this.userSer.postData.indexOf(ps),1)

    this.userSer.postData.splice(index,1)
    console.log(this.userSer.postData);
  }
}