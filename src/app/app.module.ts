
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';


import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { BnNgIdleService } from 'bn-ng-idle';
import { ChartsModule } from 'ng2-charts';

import { Daterangepicker } from 'ng2-daterangepicker';



import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { OnlineStatusModule } from 'ngx-online-status';

import { LoginComponent } from './login/login.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SalesComponent } from './sales/sales.component';
import { ReportComponent } from './report/report.component';
import { ProductsComponent } from './products/products.component';
import { AddUserModalComponent } from './modals/add-user-modal/add-user-modal.component';
import { AddTdrAgentModalComponent } from './modals/product-form-modal/product-form-modal.component';
import { UploadMpesaAgentLoansModalComponent } from './modals/upload-mpesa-agent-loans-modal/upload-mpesa-agent-loans-modal.component';
import { AddMpesaAgentPaymentModalComponent } from './modals/add-mpesa-agent-payment-modal/add-mpesa-agent-payment-modal.component';
import { EditTdrAgentModalComponent } from './modals/edit-tdr-agent-modal/edit-tdr-agent-modal.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddSalesComponent } from './add-sales/add-sales.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { CustomersComponent } from './customers/customers.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DefaultLayoutComponent,
    SideNavComponent,
    SalesComponent,
    ReportComponent,
    ProductsComponent,
    AddUserModalComponent,
    AddTdrAgentModalComponent,
    UploadMpesaAgentLoansModalComponent,
    AddMpesaAgentPaymentModalComponent,
    EditTdrAgentModalComponent,
    PasswordRecoveryComponent,
    UserProfileComponent,
    SettingsComponent,
    AddSalesComponent,
    SuppliersComponent,
    ExpensesComponent,
    CustomersComponent,
    UsersComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    Daterangepicker,
    ChartsModule,
    HttpClientModule,
    MdbCollapseModule,
    MdbCheckboxModule,
    MDBBootstrapModule.forRoot(),
    MdbModalModule,
    MdbDropdownModule,
    MdbTabsModule,
    MdbRangeModule,
    MdbFormsModule,
    MdbPopoverModule,
    FormsModule,
    OnlineStatusModule,
    NgbModule,
  ],
  providers: [BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
