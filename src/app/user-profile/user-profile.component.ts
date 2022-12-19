import { Component, OnInit, ViewChild } from '@angular/core'
import { ApiService } from 'src/app/services/api.service'
import { NgForm } from "@angular/forms"
import * as $ from 'jquery'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @ViewChild('editUserProfileForm') public editUserProfileForm: NgForm;
  @ViewChild('changeUserPasswordForm') public changeUserPasswordForm: NgForm;

  user_id = localStorage.getItem('user_id')

  info_message
  error_message
  success_message

  username
  first_name
  last_name
  email_address
  phone_number
  profile_photo_url:any = '../../assets/img/user-white-black.png'

  user_info

  file_data
  profile_photo_temp_url: string | ArrayBuffer;

  constructor(
    private ApiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.getUserInfo()
  }

  getUserInfo(){
    this.ApiService.readById('user',this.user_id)
      .subscribe(
        response=>{
          this.user_info = (<any>response).data
          this.profile_photo_url = (this.user_info.profile_photo) ? `http://109.74.197.156/${this.user_info.profile_photo}` : ''
        }
      )
  }

  loginUser(){

  }

  editProfile(form_data){
    this.ApiService.update('user/edit', form_data, this.user_id).subscribe(
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

  changePassword(form_data){
    console.log(form_data)
    this.ApiService.update('user/change-password', form_data, this.user_id)
      .subscribe(
        response=>{
          console.log(response)
          if((<any>response).status){
            this.success_message = (<any>response).message
          }
        }
      )
  }

  getFileFromForm(e) {
    this.file_data = e.target.files[0];

    var reader = new FileReader();
		
    reader.readAsDataURL(e.target.files[0]);
		reader.onload = (_event) => {
			this.profile_photo_url = reader.result; 
		}

  }

  uploadProfilePhoto(){
    var form_data = new FormData();
    form_data.append('profile_photo', this.file_data);
    form_data.append('user_id', this.user_id);

    console.log(this.file_data)

    this.ApiService.uploadFile('user/upload-profile-photo', form_data)
      .subscribe(
        response=>{
          console.log(response)
          if((<any>response).status){
            this.success_message = (<any>response).message
          }
        }
      )
  }

  selectImage(){
    $("#image_upload").click();
  }

}
