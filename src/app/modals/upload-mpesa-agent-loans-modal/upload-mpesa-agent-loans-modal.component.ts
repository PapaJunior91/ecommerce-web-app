import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-upload-mpesa-agent-loans-modal',
  templateUrl: './upload-mpesa-agent-loans-modal.component.html',
  styleUrls: ['./upload-mpesa-agent-loans-modal.component.scss']
})
export class UploadMpesaAgentLoansModalComponent implements OnInit {
  file_data:any
  tdr_agent_id
  data
  on_loading = false

  info_message
  error_message
  success_message


  constructor(
    public ApiService: ApiService,
    public modalRefUpload: MdbModalRef<UploadMpesaAgentLoansModalComponent>,
  ) { }

  ngOnInit(): void {
  }

  getFileFromForm(e) {
    this.file_data = e.target.files[0];
  }

  uploadMpesaAgentLoan() {
    this.on_loading = true
    var form_data = new FormData();
    form_data.append('mpesa_agent_loan_file', this.file_data);
    form_data.append('tdr_agent_id', this.tdr_agent_id);
    this.ApiService.uploadFile('mpesa-agents/upload-mpesa-agent-loans', form_data)
    .subscribe(
      response => {
        console.log(response);
        if((<any>response).status){
          this.success_message = (<any>response).message
          this.modalRefUpload.close()
          this.on_loading = false;
        }
      });
  }

}
