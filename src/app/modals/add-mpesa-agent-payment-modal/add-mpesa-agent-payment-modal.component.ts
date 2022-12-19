import { Component, OnInit, ViewChild } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { NgForm } from "@angular/forms";
import * as $ from 'jquery';

import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-add-mpesa-agent-payment-modal',
  templateUrl: './add-mpesa-agent-payment-modal.component.html',
  styleUrls: ['./add-mpesa-agent-payment-modal.component.scss']
})
export class AddMpesaAgentPaymentModalComponent implements OnInit {
  @ViewChild('addMPesaAgentPaymentForm') public addMPesaAgentPaymentForm: NgForm;

  mpesa_agent_id:any;
  current_date: any;
  success_message: any;
  on_loading = false

  constructor(
    public ApiService: ApiService,
    public modalRefAdd: MdbModalRef<AddMpesaAgentPaymentModalComponent>,
  ) { }

  ngOnInit(): void {
  }

  addMPesaAgentPayment(form_data){
    this.on_loading = true

    form_data.tdr_agent_id = localStorage.getItem("user_id")
    form_data.mpesa_agent_id = this.mpesa_agent_id;
    
    this.ApiService.create('tdr-agents/visits', form_data)
      .subscribe(response=>{
        if((<any>response).status){
          this.success_message = (<any>response).message
          setTimeout(() => {
            this.modalRefAdd.close((<any>response).message)
          }, 3000);
        }
    })
  }

  setOtherValue(chosen){
    if(chosen == 'other'){
        $('#other_reason_text').css('display', 'block')
        $('#other_reason_select').css('display', 'none')
    }else{
        $('#other_reason_select').css('display', 'block')
        $('#other_reason_text').css('display', 'none')
    }
}

}
