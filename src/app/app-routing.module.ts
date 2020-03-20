import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostComponent } from './modules/post/post.component';
import { DefaultComponent } from './layouts/default/default.component';
import { CreateTicketComponent } from './admin/create-ticket/create-ticket.component';
import { CreateCompanyComponent } from './admin/create-company/create-company.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { CompanyListComponent } from './admin/company-list/company-list.component';
import { LoginComponent } from './login/login/login.component';
import { TablesComponent } from './dashtables/tables/tables.component';
import { ModifyUserComponent } from './admin/modify-user/modify-user.component';
import { ModifyCompanyComponent } from './admin/modify-company/modify-company.component';


const routes: Routes = [{ path: '', component: LoginComponent },
  { path: 'default', component: DefaultComponent, children:[
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent, children:[
  { path: 'showtables', component: TablesComponent }
  ]},
  {path:'posts',component:PostComponent },
  {path:'createTicket',component:CreateTicketComponent },
  {path:'createCompany',component:CreateCompanyComponent },
  {path:'companylist',component:CompanyListComponent },
  {path:'modifyUser',component:ModifyUserComponent },
  {path:'modifyCompany',component:ModifyCompanyComponent },
  {path:'createUser',component:CreateUserComponent }
] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
