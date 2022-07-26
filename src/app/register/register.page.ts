import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = "";
  email: string = "";
  bdate: any = "";
  gender: string ="";
  password: string = "";
  rpassword: string = "";

  constructor(private router: Router, public toastCtrl: ToastController, public navCtrl: NavController) { }

  async register(){
    if(this.username == ""){
    const toast = this.toastCtrl.create({
      message: 'Username cannot be empty',
      duration: 3000
    });
    (await toast).present();
  }else if(this.bdate==""){
    const toast = this.toastCtrl.create({
      message: 'Birthdate cannot be empty',
      duration: 3000
    });
    (await toast).present();
  }else if(this.gender==""){
    const toast = this.toastCtrl.create({
      message: 'Gender cannot be empty',
      duration: 3000
    });
    (await toast).present();
  }else if(this.email==""){
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
  }else if(this.password != this.rpassword){
    const toast = this.toastCtrl.create({
      message: 'Passwords dont match',
      duration: 3000
    });
    (await toast).present();
  }else{
    this.router.navigate(['home'])
  }
}

  login(){
    this.router.navigate(['login'])
  }

  ngOnInit() {
  }

}
