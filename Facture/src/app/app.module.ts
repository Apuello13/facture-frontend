import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { FacturaComponent } from './components/factura/factura.component'
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ROUTES } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    FacturaComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
