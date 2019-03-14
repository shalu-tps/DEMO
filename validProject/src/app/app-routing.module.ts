import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { AuthGuard} from './auth.guard';
import {NotAuthGuard} from './not-auth.guard';
import { AddPostComponent } from './add-post/add-post.component';
import { UsersComponent } from './users/users.component';
import { UserIdComponent } from './user-id/user-id.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/loginPage',pathMatch:'full'
  },
  {
    path:'dashboard',component:DashboardComponent,canActivate: [AuthGuard]
  },
  {
    path:'loginPage',component:LoginPageComponent,canActivate:[NotAuthGuard]
  },
  {
    path:'postPage',component:PostPageComponent,canActivate: [AuthGuard]
  },
  {
    path:'addPost',component:AddPostComponent
  },
  {
    path:'users',component:UsersComponent
  },
  {
    path:'users/:id',component:UserIdComponent
  },
  {
      path:'users/:id/userPosts',component:UserPostsComponent
  },
  {
    path:'postPage/:id',component:PostCommentComponent,canActivate: [AuthGuard]
    // children:
    // [{
    //   path:'postComment',component:PostCommentComponent
    // }]
  },
  {
  path:'**',redirectTo:'/',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
