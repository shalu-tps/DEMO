import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { UserSerService } from '../user-ser.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  
 userModel= new User('','','','');
  title:string;
  body:string;
  adPost=[];
  // addList: Array<{title: string, body: string}> = [];
  // addList=[];
  addList: Array<User>;


  constructor(private us:UserSerService,private router:Router) {}
  
  ngOnInit() {
   
  }
  onSubmit(){
      // console.log(this.title,this.body);
      // console.log(this.userModel);
      // this.addList.push({this.title,this.body});

      // this.us.addPst.push(this.userModel.body,this.userModel.title);
      // console.log(this.us.addPst);
      if(this.userModel.title && this.userModel.body !=''){
      this.us.postData.push({
        id:this.us.postData.length+1,
        userId:localStorage.getItem("userid"),
        title:this.userModel.title,
        body:this.userModel.body
      });
      console.log(this.us.postData);
        }
      else
    {
      alert("Please fill the details");
    }}
    onPostPage(){
      this.router.navigate(['/postPage']);
  
    }

}
