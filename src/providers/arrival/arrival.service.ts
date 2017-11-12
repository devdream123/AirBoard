import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

/*
  Generated class for the ArrivalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArrivalService{
  //https://host/flifo/v3/flights/{airport}/{airline}/{adi}
//private arrivalUrl = "https://host/flifo/v3/flights/{'AKL'}/{086}/{'A'}" ;
//private arrivalUrl = "https://host/flifo/v3/flight/lax/dl/2355/a?operationDate=2014-11-12&subscribeForUpdates=true¬ifyEndpoint=https://my.endpoint.com/updates"; 
//private arrivalUrl ="https://devdream123:thanhdao94@opensky-network.org/api/states/all";
private arrivalUrl = "https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/AKL/arr/2017/11/12/12?appId=8c71a4ce&appKey=7ed99a7fc0d8a2dfff6e75246fe551d9&utc=false&numHours=1&maxFlights=5";

  constructor(public http: Http) {
    
  }
/*
  headerRequest(headers:Headers){
    headers.append('Access-Control-Allow-Origin','*');
  }*/
  getAllFlights(){
    // var headers = new Headers();
    // this.headerRequest(headers);
    // let options = new RequestOptions({ headers: headers });
    
    var response=  this.http.get(this.arrivalUrl)
                            .map(res => res.json())
                            .catch(this.handleError);
    return response;
  }


   private handleError(error : any):Promise<any>{
        console.error('An error occured', error);
        return Promise.reject(error.message || error);

    }

}
