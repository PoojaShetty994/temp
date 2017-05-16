import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CdPage } from '../cd/cd';
import { InvitiesPage } from '../invities/invities';
import { UsermanagementPage } from '../usermanagement/usermanagement';
import { InvitationPage } from '../invitation/invitation';

@Component({
  selector: 'page-options',
  templateUrl: 'options.html'
})
export class OptionsPage {

  constructor(public navCtrl: NavController) {

  }
  addevent()
  {
      this.navCtrl.push(CdPage);
  }
  addinvities()
  {
    this.navCtrl.push(InvitiesPage);
  }
  user()
  {
    this.navCtrl.push(UsermanagementPage);
  }
  slet()
  {
    this.navCtrl.push(InvitationPage);
  }

}
