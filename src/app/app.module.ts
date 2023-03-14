import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchaseRegistrationComponent } from './components/purchase-registration/purchase-registration.component';
import { MainInterfaceComponent } from './interface/main-interface/main-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    PurchaseRegistrationComponent,
    MainInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
