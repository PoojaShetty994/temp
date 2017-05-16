import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EventPage } from '../pages/event/event';
import { LoginPage } from '../pages/login/login';
import { OptionsPage } from '../pages/options/options';
import { CdPage } from '../pages/cd/cd';
import { DeletePage } from '../pages/delete/delete';
import { InvitiesPage } from '../pages/invities/invities';
import { UsermanagementPage } from '../pages/usermanagement/usermanagement';
import { InvitationPage } from '../pages/invitation/invitation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geofence } from '@ionic-native/geofence';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventPage,
    LoginPage,
    OptionsPage,
    CdPage,
    InvitiesPage,
    DeletePage,
    UsermanagementPage,
    InvitationPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventPage,
    LoginPage,
    OptionsPage,
    CdPage,
    DeletePage,
    InvitiesPage,
    UsermanagementPage,
    InvitationPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geofence,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
