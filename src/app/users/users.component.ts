import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

import { AddUserModalComponent } from '../modals/add-user-modal/add-user-modal.component';
import { ApiService } from '../services/api.service';
import { CustomFunctionService } from '../services/custom-function.service';
import { ConfirmModalComponent } from '../modals/confirm-modal/confirm-modal.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  constructor(
    private ApiService: ApiService,
    private modalService: MdbModalService,
    private customFunction: CustomFunctionService,
  ) { }

  modalRefAdd: MdbModalRef<AddUserModalComponent> | null = null;
  modalRefConfirm: MdbModalRef<ConfirmModalComponent> | null = null;

  users:any

  info_message
  error_message
  success_message

  page = 1
  pageSize = 10

  loading_spinner = false
  no_data_found: boolean;

  root_url = environment.root_url

  bulk_users_edit = []

  dateFormart = this.customFunction.formatDate

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.ApiService.read('users').subscribe(
      response => {
        this.users = response
      }
    )
  }

  openAddUserModal(user_info = null, modal_title = null, form_state) {
    let modal_data = {
      user_info: user_info,
      modal_title: modal_title,
      form_state: form_state
    }
    this.modalRefAdd = this.modalService.open(AddUserModalComponent, {
      data: modal_data
    })

    // this.modalRefAdd.onClose.subscribe((response: any) => {
    //   // console.log(response);
    //   if(response.status){
    //     // this.getTDRAgents()
    //   }
    // });

  }

  archiveUser(ids) {

    let modal_data = {
      modal_title: "Archive User",
      modal_body: `Are you sure Archive, This Action is irreversible`,
    }

    this.modalRefConfirm = this.modalService.open(ConfirmModalComponent, {
      data: modal_data
    })
    
    this.modalRefConfirm.onClose.subscribe((response)=>{
      console.log(response)
        response == 'confirm' && this.ApiService.update('users', {status: 'inactive'}, JSON.stringify(ids)).subscribe(
          (response:any) => {
            console.log(response)
          }
        )
    })
  }

  exportExcel(){
    let _objectOrder = []

    this.users.forEach((element) => {
      let objectOrder = {
        'first_name': element['first_name'],
        'last_name': element['last_name'],
        'email': element['email'],
        'phone_number': element['phone_number'],
        'role': element['role'],
        'status': element['status'],
        'last_login': element['last_login'],
        'created_at': element['created_at'],
        'updated_at': element['updated_at'],
      }

      _objectOrder.push(objectOrder);
    })

    this.customFunction.exportExcel('User', _objectOrder)

  }

  exportPdf(){

    let header = ['Firstname', 'Lastname', 'Email', 'Phone Number', 'Role', 'Status', 'Last Login', 'Created', 'Updated']
    let _objectOrder = []

    this.users.forEach((element) => {
      let objectOrder = {
        'first_name': element['first_name'],
        'last_name': element['last_name'],
        'email': element['email'],
        'phone_number': element['phone_number'],
        'role': element['role'],
        'status': element['status'],
        'last_login': element['last_login'],
        'created_at': element['created_at'],
        'updated_at': element['updated_at'],
      }

      _objectOrder.push(objectOrder);
    })

    this.customFunction.exportPdf('User', header, _objectOrder)

  }

  setBulkItems(id){
    let index = this.bulk_users_edit.indexOf(id)
    index === -1 ? this.bulk_users_edit.push(id) : this.bulk_users_edit.splice(index, 1)

        console.log(this.bulk_users_edit)
  }

  searchUser(){
    let key = $('#search_user').val()
    console.log(this.users)
    console.log(key)
    // return
    this.users = this.users.filter(user => user.id == key)

    this.users = this.users.filter(function (user)
    {
      return  user.id == 1;
    });
    console.log(this.users)
  }

}



