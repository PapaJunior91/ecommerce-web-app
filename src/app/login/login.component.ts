import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router, ActivatedRoute } from '@angular/router';


import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') public loginForm:NgForm

  message
  alert = true
  alert_status


  constructor(
    private ApiService: ApiService,
    public router:Router,
    public route:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  loginUser(){  
    let form_data = this.loginForm.value
    this.ApiService.login('login',form_data).subscribe((response:any)=>{
      console.log(response)
      if(response.status){
        localStorage.setItem('user_info', JSON.stringify(response.data))
        this.router.navigate(['reports'])
      }else{
        this.alert_status = "alert-danger"
        this.alert = true
        this.message = response.message
      }
    })
  }

}
