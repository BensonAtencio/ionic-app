import { Component } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public popoverCtrl: PopoverController) {}

  async menu(event){
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      event
    });
    return await popover.present();

  }

}
