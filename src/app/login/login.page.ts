import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private router: Router, public toastCtrl: ToastController) { }

  async login(){
      if(this.email == ""){
      const toast = this.toastCtrl.create({
        message: 'Email cannot be empty',
        duration: 3000
      });
      (await toast).present();
    }else if(this.password==""){
      const toast = this.toastCtrl.create({
        message: 'Password cannot be empty',
        duration: 3000
      });
      (await toast).present();
    }else{
      this.router.navigate(['home'])
    }
  }

  register(){
    this.router.navigate(['register'])
  }

  ngOnInit() {
  }

}