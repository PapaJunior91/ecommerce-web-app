import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CustomerFormModalComponent } from '../modals/customer-form-modal/customer-form-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

export class CustomersComponent implements OnInit {

  modalRefAdd: MdbModalRef<CustomerFormModalComponent> | null = null;


  constructor(
    private modalService: MdbModalService,

  ) { }

  tdr_agents = []

  info_message
  error_message
  success_message

  page = 1
  pageSize = 10

  loading_spinner = false
  no_data_found: boolean;

  root_url = environment.root_url


  ngOnInit(): void {
  }

  openCustomerModal() {
    this.modalRefAdd = this.modalService.open(CustomerFormModalComponent)

    this.modalRefAdd.onClose.subscribe((response: any) => {
      console.log(response);
      if(response.status){
        // this.getTDRAgents()
      }
    });

  }

}

