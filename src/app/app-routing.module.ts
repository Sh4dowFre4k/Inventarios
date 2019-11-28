import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultAppComponent } from './consult-app/consult-app.component';
import { CreateAppComponent } from './create-app/create-app.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path: '', redirectTo: '/reports', pathMatch: 'full'},
  {path: 'reports', component: ReportsComponent},
  {path: 'consult', component: ConsultAppComponent},
  {path: 'create', component: CreateAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ReportsComponent, ConsultAppComponent, CreateAppComponent];
