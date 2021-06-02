import { Factura } from "./factura";
import { Producto } from "./producto";

export class Detalle {
    id: number;
    factura: Factura;
    producto: Producto;
    cantidad: number;
    precio: number;
}
