import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/model/cliente';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html'
})
export class FacturaComponent implements OnInit {

  facturaFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, private facturaService: FacturaService) { }

  ngOnInit(): void {
    this.facturaFormGroup = this.formBuilder.group({
      cliente: this.formBuilder.group({
        nombre: [''],
        apellido: [''],
        direccion: [''],
        fechaNacimiento: [''],
        telefono: [''],
        email: ['']
      }),
      producto: this.formBuilder.group({
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
    const cliente: Cliente = {id: 0, ...this.facturaFormGroup.get('cliente').value}
    this.facturaService.saveCliente(cliente)
      .subscribe(data => console.log(data));
  }
}