import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  //role = localStorage.getItem('role')
  user_info = JSON.parse(localStorage.getItem("user_info"))
  //username = (localStorage.getItem("user_info"))
  //profile_photo = localStorage.getItem('profile_photo')
  //email = localStorage.getItem('email')
  
  constructor(
    private router: Router
    ) { }
    
  ngOnInit(): void { 
    //this.profile_photo = (this.profile_photo) ? `http://109.74.197.156/${this.profile_photo}` : '../../assets/img/user-white-black.png'
    //this.username = (this.username) ? this.username : this.email
  }

  logout(){
    localStorage.clear(); //clear all localstorage variables
    this.router.navigate(['']) //redirect to login page
  }

}
