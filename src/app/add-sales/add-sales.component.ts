import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.scss']
})
export class AddSalesComponent implements OnInit {

  selected_products = [1]

  constructor() { }

  ngOnInit(): void {
  }

}
