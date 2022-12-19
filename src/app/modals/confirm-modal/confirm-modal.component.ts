import { Component, OnInit, ViewChild } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { NgForm } from "@angular/forms";
import * as $ from 'jquery';

import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  mpesa_agent_id:any
  current_date: any
  success_message: any
  on_loading = true
  message
  alert_status

  modal_title: String
  modal_body: String
  end_point: String
  id: BigInteger

  constructor(
    public ApiService: ApiService,
    public modalRefAdd: MdbModalRef<ConfirmModalComponent>,
  ) { }

  ngOnInit(): void {
  }

  modalAction(response){
    this.modalRefAdd.close(response)
  }
  
}
