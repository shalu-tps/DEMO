import { Component, OnInit } from '@angular/core';
import {UserSerService} from '../user-ser.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form;
  public user;
  public arr=[];
  public data=[];
  public valid=false;
  public i;
  public count;
  constructor(private userSer:UserSerService,private router:Router) { 
}
  validate(value)
  {
    this.user=value;
    this.userSer.loginData().subscribe((arr:any[])=>{
    this.data=arr;
    this.valid=false;

    for(let i=0;i<this.data.length;i++)
    {
     if(this.data[i].username==this.user)
     {
       this.valid=true;
       this.userSer.userData=this.data[i];
       console.log("this.data[i]");
       localStorage.setItem('userid',this.data[i].id);
       this.router.navigate(["/dashboard"]);
       break;
      }      
    }
    //  this.count=1;

    if(this.valid==false){
      alert("Not a valid User");
    }
    });
    // this.count++;   
  }

  ngOnInit() {
    
  }
}
