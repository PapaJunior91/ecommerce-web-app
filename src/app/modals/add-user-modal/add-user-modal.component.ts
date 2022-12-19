import { Component, OnInit, ViewChild } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss']
})
export class AddUserModalComponent implements OnInit {
  @ViewChild('UserForm') public UserForm:NgForm

  on_loading = false
  message:any
  alert_status:any
  alert = false
  response:any
  user_info:any
  modal_title:string
  form_state:any

  constructor(
    public modalRef: MdbModalRef<AddUserModalComponent>,
    private ApiService: ApiService
    ) { }

  ngOnInit(): void {
    console.log(this.form_state)
  }

  switchFormState(){
    if(this.form_state == 'edit'){
      this.editUser()
    }else if(this.form_state == 'add'){
      this.addUser()
    }
  }

  addUser(){
    this.on_loading = true
    let form_data = this.UserForm.value
    console.log(form_data)
    this.ApiService.create('users', form_data).subscribe(
      (response:any) => {
        this.on_loading = false
        this.response = response//
        if(response.status){
          this.message = response.message
          this.alert = true
          this.alert_status = "alert-success"
        }
      }
    )
  }

  editUser(){
    this.on_loading = true
    let formData = this.UserForm.value
    this.ApiService.update('users', formData, this.user_info.id).subscribe(
      (response:any) => {
        this.on_loading = false
        if(response.status){
          this.alert = true
          this.message = response.message
          this.alert_status = "alert-success"
        }
      }
    )
  }

}
