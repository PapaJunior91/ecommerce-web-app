import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AddSupplierModalComponent } from '../modals/add-supplier-modal/add-supplier-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

  modalRefAdd: MdbModalRef<AddSupplierModalComponent> | null = null;

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

  openAddSupplierModal() {
    this.modalRefAdd = this.modalService.open(AddSupplierModalComponent)

    this.modalRefAdd.onClose.subscribe((response: any) => {
      console.log(response);
      if(response.status){
        // this.getTDRAgents()
      }
    });

  }

}
