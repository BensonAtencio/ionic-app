import { Component } from '@angular/core';
import { PopoverController, ActionSheetController, AlertController } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public popoverCtrl: PopoverController, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {}

  async menu(event){
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      event
    });
    return await popover.present();

  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        icon: 'trash',
        handler: async () => {
          const alert = await this.alertCtrl.create({
            header: 'Alert',
            message: 'Deleted Successfully',
            buttons: ['ok']
          });
          await alert.present();
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: async () => {
          const alert = await this.alertCtrl.create({
            header: 'Alert',
            message: 'Shared Successfully',
            buttons: ['ok']
          });
          await alert.present();
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: async () => {
          const alert = await this.alertCtrl.create({
            header: 'Alert',
            message: 'Added to Favorites',
            buttons: ['ok']
          });
          await alert.present();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
