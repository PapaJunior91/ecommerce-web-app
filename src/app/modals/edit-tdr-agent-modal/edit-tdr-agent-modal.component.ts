import { Component, OnInit, ViewChild } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-edit-tdr-agent-modal',
  templateUrl: './edit-tdr-agent-modal.component.html',
  styleUrls: ['./edit-tdr-agent-modal.component.scss']
})
export class EditTdrAgentModalComponent implements OnInit {
  @ViewChild('editTDRAgentForm') public editTDRAgentForm: NgForm;

  tdr_agent:any

  constructor(
    public modalRefEdit: MdbModalRef<EditTdrAgentModalComponent>,

  ) { }

  ngOnInit(): void {
  }

  editTDRAgent(form_data){
    console.log(form_data)
  }
}
