import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { OptionsPage } from '../options/options';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public email: any;
  public password: any;
  public isvalid:any;

  constructor(public navCtrl: NavController, private navparams: NavParams) {

    this.email="";
    this.password="";
    this.isvalid=false;
  }
  login()
  {
    if(this.email=="email" && this.password=="pass")
    {
      this.navCtrl.push(OptionsPage)
    }
    else
    {
        this.isvalid=true;
    }
  }

}
