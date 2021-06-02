import { Routes } from '@angular/router'
import { FacturaComponent } from './components/factura/factura.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const ROUTES : Routes = [
    { path: '', component: FacturaComponent },
    { path: '**', component: PagenotfoundComponent }
];