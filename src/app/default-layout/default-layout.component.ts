import { Component, OnInit } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  constructor(
    private bnIdle: BnNgIdleService,
    public router:Router
  ) { }

  ngOnInit(): void {
    // this.bnIdle.startWatching(10).subscribe((isTimedOut: boolean) => {
    //   if (isTimedOut) {
    //     console.log('session expired');
    //     localStorage.clear()
    //     this.router.navigate(['login',{status:'session_expiry'}])
    //   }
    // });
  }

}
