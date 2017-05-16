import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
import { EventPage } from '../event/event';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public name:any;
  public time:any;
  public long:any;
  public lat:any;
  public radius:any;
  public details:any;
  public results:any;
  public isEmptyEvents:any;
  public i:any;
  storage;


  constructor(public navCtrl: NavController,private navParams: NavParams) {
    this.results = [];
    this.isEmptyEvents = false;
    this.name=navParams.get('name');
    this.getEventList();
  }

  getEventList(){
    this.isEmptyEvents = false;
    if(localStorage.getItem("Notification") != null){
      this.results = JSON.parse(localStorage.getItem("Notification"));
    }
    else{
      this.results = [];
      this.isEmptyEvents = true;
    }
  }
  removeitem(result)
  {
      for(this.i=0; this.i < this.results.length; this.i++)
      {
        if(this.results[this.i]==result)
        {
          this.results.splice(this.i,1);
            //  if(localStorage.getItem("Notification") != null){
          localStorage.removeItem("Notification");
      //  }
        }
      }

  }


  navigate(){
    this.navCtrl.push(EventPage);
  }
}
