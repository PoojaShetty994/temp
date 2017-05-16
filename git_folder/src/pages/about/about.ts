
//import { EventPage } from '../event/event';
import {
    Component,
    OnInit
} from '@angular/core';
import {
    NavController ,NavParams
} from 'ionic-angular';
//import * as Leaflet from 'leaflet';
declare var L: any;
@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage implements OnInit {
  public lat: any;
  public long: any;

  //public longi:any;
    // public results:any;
     public name:any;
    // public i:any;
    //

    constructor(public navCtrl: NavController , private navParams: NavParams) {
     this.lat;
    this.long;
    this.name = "";
// this.name=navParams.get('name');
//     this.getEventList();

    }

    ngOnInit(): void {

        this.drawMap();
      }
        //this.geo()}

    //this.geo();
    // geo():void{
    //   let array = [];
    //    var mymap = L.map('map').setView([51.505, -0.09], 13);
    //   if(localStorage.getItem("Notification")!=null)
    //   {
    //     array = JSON.parse(localStorage.getItem("Notification"));
    //     for(var i=0;i<array.length;i++)
    //     {
    //       L.marker([array[i].lat,array[i].long]).addTo(mymap).bindPopup("geofence area");
    //     }
    //
    //   }
    //
    //
    // }
    // getEventList(){
    //
    //   if(localStorage.getItem("Notification") != null){
    //     this.results = JSON.parse(localStorage.getItem("Notification"));
    //   }
    //   else{
    //     this.results = [];
    //
    //   }
    // }

    drawMap(): void {
      //public lati:any;
      //public longi:any;
        var mymap = L.map('map1').setView([38.82259, -2.8125], 0);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(mymap);
        mymap.on('click', function(e) {

    //this.navCtrl.push()

  //  lati=e.latlng.lat;
    //longi=e.latlng.lng;
});



        var array = [];
        var marker;
        if (localStorage.getItem("Notification") != null) {
            array = JSON.parse(localStorage.getItem("Notification"))
            for (var i = 0; i < array.length; i++) {
                marker = new L.marker([parseFloat(array[i].Lat), parseFloat(array[i].Long)]).bindPopup(array[i].name).addTo(mymap);
            }
        }


        //mymap.on('click', onMapClick);
    }


}




/*let map = Leaflet.map('map').setView([51.505, -0.09], 13);;
Leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzsdDXD2lMJpTfCVsVuA', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18
}).addTo(map);

//web location
map.locate({ setView: true});

//when we have a location draw a marker and accuracy circle
function onLocationFound(e) {
  var radius = e.accuracy / 2;

  Leaflet.marker(e.latlng).addTo(map)
      .bindPopup("You are within " + radius + " meters from this point").openPopup();

  Leaflet.circle(e.latlng, radius).addTo(map);
}
map.on('locationfound', onLocationFound);
//alert on location error
function onLocationError(e) {
  alert(e.message);
}

map.on('locationerror', onLocationError);*/




/*

import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(): void {
    this.drawMap();
  }
  drawMap(): void {
    let map = Leaflet.map('map');
    Leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzsdDXD2lMJpTfCVsVuA', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(map);

    //web location
    map.locate({ setView: true});

    //when we have a location draw a marker and accuracy circle
    function onLocationFound(e) {
      var radius = e.accuracy / 2;

      Leaflet.marker(e.latlng).addTo(map)
          .bindPopup("You are within " + radius + " meters from this point").openPopup();

      Leaflet.circle(e.latlng, radius).addTo(map);
    }
    map.on('locationfound', onLocationFound);
    //alert on location error
    function onLocationError(e) {
      alert(e.message);
    }

    map.on('locationerror', onLocationError);
  }
}
*/
