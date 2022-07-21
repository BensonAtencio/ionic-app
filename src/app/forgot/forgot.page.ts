import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  password: string = "";
  npassword:  string = "";

  constructor(private router: Router, public toastCtrl: ToastController) { }

  async login(){
    if(this.password == ""){
    const toast = this.toastCtrl.create({
      message: 'Password cannot be empty',
      duration: 3000
    });
    (await toast).present();
  }else if(this.npassword==""){
    const toast = this.toastCtrl.create({
      message: 'New Password cannot be empty',
      duration: 3000
    });
    (await toast).present();
  }else if(this.password != this.npassword){
    const toast = this.toastCtrl.create({
      message: 'Passwords do not match',
      duration: 3000
    });
    (await toast).present();
  }else{
    this.router.navigate(['home'])
  }
}

  ngOnInit() {
  }

}
