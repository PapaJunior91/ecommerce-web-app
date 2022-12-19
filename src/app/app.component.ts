import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'kuunda-tdr-agent-portal';

  successAlert = false;

  constructor(
    private bnIdle: BnNgIdleService,
    public router:Router

    ) {
 
  }

  

  copyToClipboard(value: string): void {
    const tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    this.successAlert = true;

    setTimeout(() => {
      this.successAlert = false;
    }, 900);
  }
}
