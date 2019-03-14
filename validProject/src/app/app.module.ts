import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserSerService} from './user-ser.service';
import { PostPageComponent } from './post-page/post-page.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { AuthGuard } from './auth.guard';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {NotAuthGuard} from './not-auth.guard';
import { AddPostComponent } from './add-post/add-post.component';
import { UsersComponent } from './users/users.component';
import { UserIdComponent } from './user-id/user-id.component';
import { UserPostsComponent } from './user-posts/user-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPageComponent,
    PostPageComponent,
    PostCommentComponent,
    AddPostComponent,
    UsersComponent,
    UserIdComponent,
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserSerService,AuthGuard,NotAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
