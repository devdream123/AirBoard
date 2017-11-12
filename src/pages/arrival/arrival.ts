import { ArrivalService } from '../../providers/arrival/arrival.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-arrival',
  templateUrl: './arrival.html'
})
export class ArrivalPage implements OnInit {
//  private  test = "Hello World";
  arrivalList=[];
  constructor(public navCtrl: NavController, private arrivalService: ArrivalService) {
    
  }

  ngOnInit():void{
    var json;    
    //this.test;
    this.arrivalService.getAllFlights().subscribe(result => {
      // console.log(data.appendix.airlines);
      // this.arrivalList.push(data.appendix.airlines[1]);
      // console.log(this.arrivalList[0].name);
      console.log(result.flightStatuses);
      json = result;
      for (var flight of json.flightStatuses) {
        this.arrivalList.push(flight);
       }
      // this.arrivalList.push(data.flightStatuses[1]);
      // console.log(this.arrivalList[0]);
      
      // for(var i = 0; i < data.length; i++){
      //   this.arrivalList.push(data.flightStatuses[i]);
      // }
      // console.log(this.arrivalList[0]);
    });
  }

}


/*

 this.arrivalService.getAllFlights().subscribe((data) => {
        for(var i = 0 ; i < data.states.length ; i ++){
          for (var j = 0 ; j<data.states[i].length ; j++){
            this.arrivalList[i][j] = data.states[i][j];
          } 
        }
    });

*/