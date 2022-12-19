import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgForm } from '@angular/forms';
import * as $ from 'jquery';

import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {
  @ViewChild('passwordRecoveryForm') public passwordRecoveryForm:NgForm
  @ViewChild('requestPasswordRecoveryForm') public requestPasswordRecoveryForm:NgForm


  info_message
  error_message
  success_message
  email
  password_reset_token

  constructor(
    private route: ActivatedRoute,
    private ApiService: ApiService,

  ) { }

  ngOnInit(): void {
    this.getQueryParams()
  }

  getQueryParams(){
    this.route.queryParams
      .subscribe(params => {
          this.email = params.email
          this.password_reset_token = params.token

          if(Object.keys(params).length != 0){
            $('#passwordRecoveryForm').css('display','block')
            $('#requestPasswordRecoveryForm').css('display','none')
          }
        }
      );

  }

  passwordRecover(){
    var new_password = $('#new_password').val()
    var confirm_password = $('#confirm_password').val()

    // check if passwords match
    if(new_password != confirm_password){
      // this.error_message = 'Passwords Dont Match'
      // return
    }

    var data = {
      email: this.email,
      password: confirm_password,
      password_reset_token: this.password_reset_token
    }

    this.ApiService.create('user/password-reset',data).subscribe(
      response=>{
        console.log(response)
        if((<any>response).status){
          this.success_message = (<any>response).message
        }else{
          this.error_message = (<any>response).message
        }
      }
    )
  }

  requestPasswordRecover(){
    var email = $('#email').val()
    var data = {
      email: email
    }
    this.ApiService.create('user/request-password-reset',data)
    .subscribe(
      response=>{
        console.log(response)
        if((<any>response).status){
          this.info_message = `Instructions to recover your password have been sent to ${email}`
        }else{
          this.error_message = (<any>response).message
        }
      }
    )
  }

}
