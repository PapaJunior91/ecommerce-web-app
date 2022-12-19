import { Injectable } from '@angular/core';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';


@Injectable({
  providedIn: 'root'
})
export class CheckInternetConnectionService {

  status: OnlineStatusType = this.onlineStatusService.getStatus(); // get initial status

  constructor(private onlineStatusService: OnlineStatusService) {
  }

  
  checkConnectivity(){
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      // Retrieve Online status Type
      // console.log(this.status = status)
    })
    return 'ok';
  }

}
