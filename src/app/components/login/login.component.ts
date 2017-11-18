import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userEmail:string;
  userPw:string;
  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  login(){

   let user ={
     email:this.userEmail,
     password: this.userPw
   }
   console.log(user)

   
   this.authService.authenticateUser(user).subscribe(data=>{
     if(data.success){
       this.flashMessage.show(data.message,{
         cssClass:'alert-success',
         timeout:5000
       });
       this.router.navigate(['/user/dashboard']);
     }else{
       this.flashMessage.show(data.message,{
         cssClass:'alert-danger',
         timeout:5000
       });
     }
   })


  }

}
