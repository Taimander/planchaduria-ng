import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseRegistrationComponent } from './components/purchase-registration/purchase-registration.component';
import { MainInterfaceComponent } from './interface/main-interface/main-interface.component';

const routes: Routes = [
  {path: '', redirectTo: 'purchase-registration', pathMatch: 'full'},
  {path: '', component: MainInterfaceComponent, children:[
    {path:'purchase-registration', component:PurchaseRegistrationComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
