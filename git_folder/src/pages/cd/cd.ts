import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { DeletePage } from '../delete/delete';

@Component({
  selector: 'page-cd',
  templateUrl: 'cd.html'
})
export class CdPage {

  constructor(public navCtrl: NavController) {

  }
 createevent()
  {
     this.navCtrl.push(TabsPage)
   }
  deleteevent()
  {
    this.navCtrl.push(DeletePage);
  }

}
