import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-add-supplier-modal',
  templateUrl: './customer-form-modal.component.html',
  styleUrls: ['./customer-form-modal.component.scss']
})
export class CustomerFormModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<CustomerFormModalComponent>) { }

  ngOnInit(): void {
  }

}
