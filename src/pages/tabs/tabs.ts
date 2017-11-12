import { Component } from '@angular/core';

import { DeparturePage } from '../departure/departure';
import { AirportPage } from '../airport/airport';
import {ArrivalPage } from '../arrival/arrival';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ArrivalPage;
  tab2Root = DeparturePage;
  tab3Root = AirportPage;

  constructor() {

  }
}
