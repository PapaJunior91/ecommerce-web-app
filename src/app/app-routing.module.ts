import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AddSalesComponent } from './add-sales/add-sales.component';
import { LoginComponent } from './login/login.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { SalesComponent } from './sales/sales.component';
import { ReportComponent } from './report/report.component';
import { ProductsComponent } from './products/products.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { UsersComponent } from './users/users.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [  
  {path: '', pathMatch: 'prefix', component: AppComponent,
    children: [
      {path: '', component: LoginComponent},
      {path: 'password-recovery', component: PasswordRecoveryComponent},
    ]
  },
  {path: '', component: DefaultLayoutComponent,
    children: [
      {path: 'reports', component: ReportComponent},
      {path: 'sales', component: SalesComponent},
      {path: 'add-sales', component: AddSalesComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'user-profile', component: UserProfileComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'customers', component: CustomersComponent},
      {path: 'suppliers', component: SuppliersComponent},
      {path: 'users', component: UsersComponent},
      {path: 'expenses', component: ExpensesComponent},
    ]
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
