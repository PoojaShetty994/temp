import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-delete',
  templateUrl: 'delete.html'
})
export class DeletePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  delete() {
    let confirm = this.alertCtrl.create({
      title: 'are you sure?',
      message: 'are you sure you want to delete this event?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }


}
