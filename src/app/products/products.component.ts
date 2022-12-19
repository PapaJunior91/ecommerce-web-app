import { Component, OnInit, ViewChild } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { AddTdrAgentModalComponent } from '../modals/product-form-modal/product-form-modal.component';
import { EditTdrAgentModalComponent } from '../modals/edit-tdr-agent-modal/edit-tdr-agent-modal.component';
import { UploadMpesaAgentLoansModalComponent } from '../modals/upload-mpesa-agent-loans-modal/upload-mpesa-agent-loans-modal.component';
import * as $ from 'jquery'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  modalRefAdd: MdbModalRef<AddTdrAgentModalComponent> | null = null;
  modalRefEdit: MdbModalRef<EditTdrAgentModalComponent> | null = null;
  modalRefUpload: MdbModalRef<UploadMpesaAgentLoansModalComponent> | null = null;

  products = []
  agents_to_archive = []

  info_message
  error_message
  success_message

  page = 1
  pageSize = 10

  root_url = environment.root_url
  web_root_url = 'http://127.0.0.1:8000/'

  loading_spinner = true
  no_data_found: boolean;


  constructor(
    private modalService: MdbModalService,
    private ApiService: ApiService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  bulkArchive(){
    console.log(this.agents_to_archive)
    var id=null
    this.ApiService.update('user/bulk-edit', this.agents_to_archive, id)
      .subscribe(
        response => {
          console.log(response)
        }
      )
  }

  bulkSelect(e){
    $('#bulk_select_grp_btns').css('display','block')
    this.agents_to_archive.push(e.target.id)
  }

  openAddTDRAgentModal() {
    this.modalRefAdd = this.modalService.open(AddTdrAgentModalComponent)

    this.modalRefAdd.onClose.subscribe((response: any) => {
      console.log(response);
      if(response.status){
        // this.getTDRAgents()
      }
    });

  }

  
  openEditTDRAgentModal(tdr_agent) {
    this.modalRefEdit = this.modalService.open(EditTdrAgentModalComponent, {
      data: { 
        tdr_agent: tdr_agent 
      }
    })
  }

  openUploadMpesaAgentLoansModal(tdr_agent_id) {
    this.modalRefUpload = this.modalService.open(UploadMpesaAgentLoansModalComponent, {
      data: { 
        tdr_agent_id: tdr_agent_id,
       }
    })
  }

  getProducts(){
    this.ApiService.read('products')
    .subscribe(
      (response:any)=>{
        this.products = response
        this.loading_spinner = false;
        (this.products.length == 0) ? this.no_data_found = true : null

    })
  }
 

  searchTDRAgent(){
    var data = {
      tdr_agent_name: $('#tdr_agent_name').val(),
    } 
    this.ApiService.searchByMultipleKeys('tdr-agents', data).subscribe(response=>{
      console.log(this.products =  (<any>response).data);
    })
  }

}
