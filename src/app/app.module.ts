import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { DeparturePage } from '../pages/departure/departure';
import { AirportPage } from '../pages/airport/airport';
import { ArrivalPage } from '../pages/arrival/arrival';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ArrivalService } from '../providers/arrival/arrival.service';

@NgModule({
  declarations: [
    MyApp,
    DeparturePage,
    AirportPage,
    ArrivalPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DeparturePage,
    AirportPage,
    ArrivalPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ArrivalService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
