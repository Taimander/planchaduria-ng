import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchaseRegistrationComponent } from './components/purchase-registration/purchase-registration.component';
import { MainInterfaceComponent } from './interface/main-interface/main-interface.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PurchaseRegistrationComponent,
    MainInterfaceComponent
  ],
  imports: [
    FormsModule,
    SelectButtonModule,
    InputTextModule,
    TableModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
