import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {


  constructor(public popoverCtrl: PopoverController, private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {}

  close(){
    this.popoverCtrl.dismiss();
  }

  async signout(){
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: 'You have been signed out',
      buttons: ['ok']
    });
    await alert.present();
    this.router.navigate(['/login']);
    this.popoverCtrl.dismiss();
  }

}
