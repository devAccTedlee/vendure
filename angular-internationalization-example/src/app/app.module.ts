import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PaymentResultComponent } from './payment-result/payment-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentComponent,
    PaymentResultComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'payment',component: PaymentComponent},
      {path: 'payment/result', component: PaymentResultComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
    BrowserAnimationsModule,
    // material modules
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [RouterModule],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
