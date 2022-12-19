import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

import { CustomFunctionService } from '../services/custom-function.service';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import * as $ from 'jquery';
import { environment } from 'src/environments/environment';

import { AddMpesaAgentPaymentModalComponent } from '../modals/add-mpesa-agent-payment-modal/add-mpesa-agent-payment-modal.component';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  tdr_agents = []
  mpesa_agents = []

  info_message
  error_message
  success_message

  page = 1
  pageSize = 10

  loading_spinner = false
  no_data_found: boolean;

  root_url = environment.root_url

  public daterange: any = {};
 
  // see original project for full list of options
  // can also be setup using the config service to apply to multiple pickers
  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: true,
  };
  total_number_of_tdr_agents: string;
 
  public selectedDate(value: any, datepicker?: any) {
    // this is the date  selected
    console.log(value);
 
    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;
 
    // use passed valuable to update state
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }


  constructor(
    private ApiService: ApiService,
    private customFunction: CustomFunctionService,
  ) { }

  ngOnInit(): void {
  }



}
