import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Router } from '@angular/router';
import { User } from './user';
// import { IPosts } from 'src/app/emp';

@Injectable({
  providedIn: 'root'
})
export class UserSerService {

public userData;
public idDet;
public apiUrl:string='https://jsonplaceholder.typicode.com/posts';
public api:string='https://jsonplaceholder.typicode.com/users/';
public a:string='https://jsonplaceholder.typicode.com/posts?userId=1';
public addPst=[];
public postData=[];

  constructor(private http:HttpClient,private route:Router) { }
  

loginData()
{
  return this.http.get('https://jsonplaceholder.typicode.com/users');
}
postPage()
{
  return this.http.get('https://jsonplaceholder.typicode.com/posts');
}
comments(id)
{
  return this.http.get('https://jsonplaceholder.typicode.com/posts');

}
public getComment(id: number){
  return this.http.get(`${this.apiUrl}/${id}/comments`);
 }
 public postDet(id: number){
  return this.http.get(`${this.apiUrl}/${id}`);
 }

 sendToken(value: string) {
  localStorage.setItem("userid", JSON.stringify(value))
}

getToken() {
  return localStorage.getItem("userid")
}

isLoggednIn() {
  return this.getToken() !== null;
}

logout() {
  localStorage.removeItem("userid");
  this.route.navigate(["loginPage"]);
}

getById()
{
  const id=localStorage.getItem("userid");
  return this.http.get(`https://jsonplaceholder.typicode.com/users/`+id);
}
getUserView(){
  return this.http.get('https://jsonplaceholder.typicode.com/users');

}
public userDet(id: number){
  return this.http.get(`${this.api}/${id}`);
 }
 public getUserPost(id: number){
  return this.http.get(`${this.apiUrl}/${id}`);
 }
 public userD(id){
   const params = { userId: id ,d: '3'}
   let headers = new HttpHeaders();
   headers = headers.append('token', 'asdasdasd');
  return this.http.get(`https://jsonplaceholder.typicode.com/posts`, { params, headers });
 }
}