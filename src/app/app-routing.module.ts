import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultAppComponent } from './consult-app/consult-app.component';
import { ModifyAppComponent } from './modify-app/modify-app.component';
import { CreateAppComponent } from './create-app/create-app.component';


const routes: Routes = [
  {path: 'consult', component: ConsultAppComponent},
  {path: 'modify', component: ModifyAppComponent},
  {path: 'create', component: CreateAppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ConsultAppComponent, ModifyAppComponent, CreateAppComponent];
