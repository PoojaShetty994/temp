import { Component , OnInit } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
//import { AboutPage } from '../about/about';
import { Geofence } from '@ionic-native/geofence';
declare var L: any;

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class  EventPage implements OnInit{
  public name:any;
  public time:any;
  public long:any;
  public lat:any;
  public radius:any;
  public mymap:any;


  constructor(public  navCtrl: NavController,private navParams: NavParams, public geofence: Geofence,public platform:Platform)//,public geofence: Geofence)
   {
    this.name = "";
    this.time = "";
    this.long;
    this.lat;
    this.radius = 30;
    //this.takegeo();
    //this.lati = e.latlng.lat;
    //this.longi = e.latlng.lng;

    //this.name=navParams.get('e.latlng.lat');
      //this.name=navParams.get('e.latlng.lng');

      //alert(lati);
      //      alert(longi);

    //
    // this.platform.ready().then((readySource) => {
    //     setTimeout(() =>{
    //           this.takegeo();
    //     },1000)
    //
    //   geofence.initialize().then(
    //    () => console.log('Geofence Plugin Ready'),
    //   (err) => console.log(err)
    //   )
    // });
  }
  ngOnInit(): void{


   this.takegeo();
  }
  takegeo()
  {
    var mymap = L.map('map').setView([38.82259, -2.8125], 0);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(mymap);

    mymap.on('click', (e)=> {
 alert("you selected Latitude, Longitude : " + e.latlng.lat + ", " + e.latlng.lng)

 this.lat=e.latlng.lat;
 this.long=e.latlng.lng;
//
// //if (mymap != undefined) { mymap.remove(); }
});

//
//
}

  btn_click(): void
  {
    let array = [];
    let geofence = {};

    //options describing geofence
    geofence = {
      id: "69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb", //any unique ID
      latitude: this.lat, //center of geofence radius
      longitude: this.long,
      radius: this.radius, //radius to edge of geofence
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          "Today Event", //notification title
          text:           "You just arrived to location.", //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }

    this.geofence.addOrUpdate(geofence).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );

    if(localStorage.getItem("Notification") == null){
      array.push({"Name":this.name,"Time" : this.time,"Long": this.long,"Lat":this.lat,"Radius":this.radius})
      localStorage.setItem("Notification",JSON.stringify(array));
    }
    else{

      array = JSON.parse(localStorage.getItem("Notification"));
      array.push({"Name":this.name,"Time" : this.time,"Long": this.long,"Lat":this.lat,"Radius":this.radius})
      localStorage.setItem("Notification",JSON.stringify(array));
    }
    this.navCtrl.setRoot(HomePage);

  }

}
