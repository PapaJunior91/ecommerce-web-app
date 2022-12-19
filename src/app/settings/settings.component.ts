import { Component, OnInit } from '@angular/core'
import { ApiService } from '../services/api.service'
import { CustomFunctionService } from '../services/custom-function.service'
import * as $ from 'jquery'


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  info_message
  error_message
  success_message

  loading_spinner = false

  collection_commissions

  currencyFormart = this.customFunction.formatCurrency

  constructor(
    private ApiService: ApiService,
    private customFunction: CustomFunctionService
  ) { }

  ngOnInit(): void {
    this.getCollectionCommissions()
  }

  getCollectionCommissions(){
    this.ApiService.read('collection-commission').subscribe(
      (response) => {
        console.log(this.collection_commissions = response)
      }
    )
  }

  toggleButtonLabel(){
    var button_label = $('#toggleButton').html()
    let new_button_label = (button_label == 'Expand') ? 'Collapse' : 'Expand'
    $('#toggleButton').html(new_button_label)
  }

  updateCommission(index, id){
    // console.log(e)
    // alert(id)
    this.loading_spinner = true
    let min = $('#min'+index).val()
    let max = $('#max'+index).val()
    let percentage = $('#percentage'+index).val()

    let data = {
      min: min,
      max: max,
      percentage: percentage
    }

    this.ApiService.update('collection-commission',data,id).subscribe(
      (response) => {
        console.log(response)
        if((<any>response).status){
          setTimeout(() => {
                this.loading_spinner = false
                $('.save-btn'+index).html('Update')
          }, 3000);
        }
      }
    )

  }

  addCommission(){
    var item = {
      min: 0, max: 0, percentage: 0
    }
    this.collection_commissions.push(item)
  }

  deleteCommission(index, id){
    this.collection_commissions.splice(index, 1)
    this.ApiService.delete('collection-commission', id).subscribe(
      (response) => {
        console.log(response)
      }
    )

  }

  saveCommission(index){
    $('.save-btn'+index).html('Saving...')
    this.loading_spinner = true
    let min = $('#min'+index).val()
    let max = $('#max'+index).val()
    let percentage = $('#percentage'+index).val()

    let data = {
      min: min,
      max: max,
      percentage: percentage
    }

    this.ApiService.create('collection-commission',data).subscribe(
      (response) => {
        console.log(response)
        if((<any>response).status){
          setTimeout(() => {
                this.loading_spinner = false
                $('.save-btn'+index).html('Update')
          }, 3000);
        }
      }
    )

  }

}
