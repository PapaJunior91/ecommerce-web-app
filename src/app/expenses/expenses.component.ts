import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  constructor() { }

  
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

}
