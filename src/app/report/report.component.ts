import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { ApiService } from 'src/app/services/api.service';
import { CustomFunctionService } from '../services/custom-function.service';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  public daterange: any = {};
 
  // see original project for full list of options
  // can also be setup using the config service to apply to multiple pickers
  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: true,
  };
  total_number_of_tdr_agents: string;
 
  public selectedDate(value: any, datepicker?: any) {
    // this is the date  selected
    console.log(value);
 
    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;
 
    // use passed valuable to update state
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }
  
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public lineChartLabels = [`Jan`, `Feb`, `March`, `Apr`, `May`, `Jun`, `July`, `Aug`, `Sept`, `Oct`, `Nov`, `Dec`];
  public lineChartType = 'line';
  public lineChartLegend = true;
  lineChartData = [];

  public barChartLabels = [`Jan`, `Feb`, `March`, `Apr`, `May`, `Jun`, `July`, `Aug`, `Sept`, `Oct`, `Nov`, `Dec`];
  public barChartType = 'bar';
  public barChartLegend = true;
  barChartData = [];
  
  public lineChartOptionsCost = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public doughnutChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public lineChartLabelCosts = [`Jan`, `Feb`, `March`, `Apr`, `May`, `Jun`, `July`, `Aug`, `Sept`, `Oct`, `Nov`, `Dec`];
  public lineChartTypeCost = 'line';
  public lineChartLegendCost = true;
  lineChartDataCost = [];

  public doughnutChartLabels = [`Food`, `Electricity`, `Transport`, `Water`, `Allowances`];
  public doughnutChartType = 'doughnut';
  public doughnutChartLegend = true;
  doughnutChartData = [];
  
  tdr_agents = []
  tdr_agent_visits = []

  info_message:any
  error_message:any
  tdr_agent_name:any
  total_commission:any
  total_outstanding:any
  loading_spinner = true
  total_amount_collected:any
  total_number_of_mpesa_agents:any

  status: OnlineStatusType = this.onlineStatusService.getStatus(); // get initial status

  // status: OnlineStatusType; //Enum provided by ngx-online-status
  onlineStatusCheck: any = OnlineStatusType;

  currencyFormart = this.customFunction.formatCurrency

  selected: {startDate: 'Dayjs', endDate: 'Dayjs'};

  constructor(
    private ApiService: ApiService,
    private customFunction: CustomFunctionService,
    private onlineStatusService: OnlineStatusService
  ) { 
    // this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
    //   console.log(status);
    // })
  }

  ngOnInit(): void {
    this.getTDRAgentsReport()
  }

  clearInput(){
    this.customFunction.clearInput('tdr_agent_name')
  }

  exportAgentDataExcel(){

    if (this.tdr_agent_visits.length == 0) {
      this.info_message = "No data to export"
      return
    }

    var report_type ='TDR Agent Visits'
    // var header = ['Agent ID', 'Visitation Date', 'Reason', 'Amount Paid', 'Commission', 'Next Payment Date', 'Next Payment']
    let agentVisits = []

    this.tdr_agent_visits.forEach((element, index) => {
      let agentVisit = {
        'agent_id': element['agent_id'],
        'visitation_date': element['visitation_date'],
        'reason': element['reason'],
        'amount_paid': element['amount_paid'],
        'agent_commission': element['agent_commission'],
        'next_payment_date': element['next_payment_date'],
        'next_payment_amount': element['next_payment_amount'],
      }
      agentVisits.push(agentVisit);
    })

    this.customFunction.exportExcel(report_type, agentVisits)

  }

  exportAgentDataPdf(){

    if (this.tdr_agent_visits.length == 0) {
      this.info_message = "No data to export"
      return
    }

    var report_type ='TDR Agent Visits'
    var header = ['Agent ID', 'Visitation Date', 'Reason', 'Amount Paid', 'Commission', 'Next Payment Date', 'Next Payment']
    let agentVisits = []

    this.tdr_agent_visits.forEach((element, index) => {
      let agentVisit = {
        'agent_id': element['agent_id'],
        'visitation_date': element['visitation_date'],
        'reason': element['reason'],
        'amount_paid': element['amount_paid'],
        'agent_commission': element['agent_commission'],
        'next_payment_date': element['next_payment_date'],
        'next_payment_amount': element['next_payment_amount'],
      }
      agentVisits.push(agentVisit);
    })

    this.customFunction.exportPdf(report_type, header, agentVisits, this.tdr_agent_name)
  }

  // filterData(mpesa_agent_id){
  //   alert(mpesa_agent_id)
  // }

  filterByVisitationDate(){
    return
    var date_from =  $('#date_from').val()
    var date_to =  $('#date_to').val()

    if(date_from && !date_to){
      // this.getTDRAgentReportByDate(date_from)
    }else if(!date_from && date_to){

    }else if(date_from && date_to){

    }

  }

  getTDRAgentsReport(){
    this.ApiService.read('tdr-agents/reports').subscribe(response=>{
      let res = (<any>response).data;
      this.setCount(res);
      this.setChartData(res);
    })
  }

  getTDRAgentReport(tdr_agent_id, first_name, last_name){

    this.resetCount()

    this.filterData(tdr_agent_id)

    $('#tdr_agent_name').val( first_name+' '+last_name)

    this.tdr_agent_name = first_name+' '+last_name
    
    $('#tdr_agent_id').val(tdr_agent_id)
    
    this.customFunction.closeDropdown('displayTDRAgents')
    
  }
  
  closeDropdown(){
  }

  filterData(tdr_agent_id=null, mpesa_agent_id=null, date_from=null, date_to=null){

    var data = {
      tdr_agent_id: (tdr_agent_id) ? tdr_agent_id: 0,
      mpesa_agent_id: (mpesa_agent_id) ? mpesa_agent_id: 0,
      date_from: (date_from) ? date_from: 0,
      date_to: (date_to) ? date_to: 0
    }  
    
    var key = ''

    for (const item in data) {
      key = key+'/'+data[item]
    }

    // console.log(key)

    this.ApiService.searchByMultipleKeys('tdr-agents/reports', key)
      .subscribe(response=>{
        console.log(response)
        this.tdr_agent_visits = (<any>response).data.tdr_agent_visits
        let res = (<any>response).data;
        this.setCount(res);
        this.setChartData(res);
    })

    // $('#tdr_agent_name').val( first_name+' '+last_name)
    // $('#tdr_agent_id').val(tdr_agent_id)
    // this.customFunction.closeDropdown('displayTDRAgents')

  }

  searchTDRAgent(key){
    this.ApiService.search('tdr-agents',key).subscribe(response=>{
      this.customFunction.openDropdown('displayTDRAgents')
      this.tdr_agents = (<any>response).data
    })
  }
  

  setCount(response){
    // remove loading spinner
    this.loading_spinner = false

    this.total_outstanding            = this.currencyFormart(response.total_outstanding)
    this.total_amount_collected       = this.currencyFormart(response.total_amount_collected)
    this.total_number_of_mpesa_agents = this.currencyFormart(response.total_number_of_mpesa_agents)
    this.total_number_of_tdr_agents = this.currencyFormart(response.total_number_of_tdr_agents)
    this.total_commission             = this.currencyFormart(response.total_commission)
  }

  setChartData(res){
    let chrt_collection = new Array(12).fill(0);
    let chrt_arry_collection = []
    let data = res.analytics

    data.forEach((dat) => {
      chrt_collection.splice(dat.month-1, 1, dat.sum)
    });

    let chrt_obj = {
      data: chrt_collection,
      label: 'Revenue Collections',
      // backgroundColor: "rgba(255,99,132,0.4)",
      backgroundColor: '',
      borderColor: "#73187F",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255,99,132,0.8)"
    }

    chrt_arry_collection.push(chrt_obj)
    
    this.lineChartData = chrt_arry_collection
    this.barChartData = chrt_arry_collection
    this.lineChartDataCost = chrt_arry_collection
    this.doughnutChartData = chrt_arry_collection

  }

  resetCount(){
    
    this.loading_spinner = true;

    delete this.total_outstanding
    delete this.total_amount_collected
    delete this.total_number_of_mpesa_agents
    delete this.total_commission
  }

}
