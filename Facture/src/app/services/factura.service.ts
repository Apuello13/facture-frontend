import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Factura } from '../model/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  url: string = "http://localhost:8001/cliente"
  constructor(private http: HttpClient) { }

  saveCliente(cliente: Cliente){
    return this.http.post(this.url, cliente);
  }
}
