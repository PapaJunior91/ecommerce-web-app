import { Component, OnInit, ViewChild } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { NgForm } from "@angular/forms";

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-form-modal',
  templateUrl: './product-form-modal.component.html',
  styleUrls: ['./product-form-modal.component.scss']
})
export class AddTdrAgentModalComponent implements OnInit {
  @ViewChild('addProductForm') public addProductForm: NgForm;
  @ViewChild('uploadTDRAgentForm') public uploadTDRAgentForm: NgForm;

  data
  file_data:any
  on_loading = false
  success_message

  user_info = JSON.parse(localStorage.getItem("user_info"))

  constructor(
      public ApiService: ApiService,
      public modalRefAdd: MdbModalRef<AddTdrAgentModalComponent>,
    ) { }

  ngOnInit(): void {
  }

  getFileFromForm(e) {
    this.file_data = e.target.files[0];
  }

  addProduct() {
    this.on_loading = true
    var form_data = new FormData();
    var formData = this.addProductForm.value
    form_data.append('product_image', this.file_data);
    form_data.append('product_name', formData.product_name);
    form_data.append('product_cost', formData.product_cost);
    form_data.append('product_price', formData.product_price);
    form_data.append('created_by', this.user_info.id);

    this.ApiService.uploadFile('products', form_data)
    .subscribe(
      (response:any) => {
        console.log(response);
        if(response.status){
          this.success_message = response.message
          this.modalRefAdd.close()
          this.on_loading = false;
        }
      });
  }


}
