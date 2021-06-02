import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/model/cliente';
import { Detalle } from 'src/app/model/detalle';
import { Factura } from 'src/app/model/factura';
import { Producto } from 'src/app/model/producto';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html'
})
export class FacturaComponent implements OnInit {
  factura: Factura;
  nFactura: Factura;
  producto: Producto;
  detalle: Detalle;
  facturaFormGroup: FormGroup;
  alert: string;
  constructor(private formBuilder: FormBuilder, private facturaService: FacturaService) { }

  ngOnInit(): void {
    this.facturaFormGroup = this.formBuilder.group({
      cliente: this.formBuilder.group({
        id: [0],
        nombre: [''],
        apellido: [''],
        direccion: [''],
        fechaNacimiento: [''],
        telefono: [''],
        email: ['']
      }),
      producto: this.formBuilder.group({
        id: [0],
        nombre: [''],
        precio: [''],
        stock: ['']
      }),
      detalle: this.formBuilder.group({
        cantidad: [''],
        precio: ['']
      })
    })
  }

  onSubmitFactura(){
    this.facturaService.saveCliente(this.facturaFormGroup.get('cliente').value, 'cliente')
      .subscribe((data: Cliente) => {
        this.factura = {id: 0, cliente: data, fecha: new Date()};

        this.facturaService.saveFactura('factura', this.factura)
          .subscribe((data: Factura) => this.nFactura = data);
      });
    this.facturaService.saveProducto('producto', this.facturaFormGroup.get('producto').value)
      .subscribe((data: Producto) => {
        this.producto = data;
        this.detalle = {id: 0,
                        factura: this.nFactura,
                        producto: this.producto,
                        cantidad: this.facturaFormGroup.get('detalle').value.cantidad,
                        precio: this.facturaFormGroup.get('detalle').value.precio};
        this.facturaService.saveDetalle('detalle', this.detalle)
          .subscribe(data => {
            if(data != null){
              this.alert = "La factura se ha registrado con exito"
            }else{
              this.alert = "No se pudo guardar la factura en la base de datos";
            }
          })
      });
  }
}