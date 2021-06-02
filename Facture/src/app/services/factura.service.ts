import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Producto } from '../model/producto';
import { map } from 'rxjs/operators'
import { Factura } from '../model/factura';
import { Detalle } from '../model/detalle';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  url: string = "http://localhost:8001/"
  constructor(private http: HttpClient) { }

  saveCliente(cliente: Cliente, endpoint: string){
    return this.http.post(`${this.url}${endpoint}`, cliente)
  }

  saveProducto(endpoint: string, producto: Producto){
    return this.http.post(`${this.url}${endpoint}`, producto)
  }

  saveFactura(endpoint: string, factura: Factura){
    return this.http.post(`${this.url}${endpoint}`, factura)
  }

  saveDetalle(endpoint: string, detalle: Detalle){
    return this.http.post(`${this.url}${endpoint}`, detalle)
  }
}
