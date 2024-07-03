import { Injectable } from "@angular/core";
import { ProductoModel } from "../pages/models/producto.models"; 
@Injectable({ providedIn: 'root' })
export class ProductosService {
  private productos: ProductoModel[] = [
    { idproducto: 1, nombreproducto: "T", descripcion: "https://herbitas.com/media/catalog/category/tapes-elasticos_1.jpg", precio: 100 },
    { idproducto: 2, nombreproducto: "Tenis", descripcion: "assets/img/2tenis.jpg", precio: 200 },
    { idproducto: 3, nombreproducto: "Reloj", descripcion: "assets/img/3reloj.jpg", precio: 300 },
  ];

  constructor() {
    console.log('Servicio listo para usar!!!');
  }

  getProductos(): ProductoModel[] {
    return this.productos;
  }

  getProducto(id: number): ProductoModel | undefined {
    return this.productos.find(producto => producto.idproducto === id);
  }

  buscarProductos(termino: string): ProductoModel[] {
    let productosArr: ProductoModel[] = [];
    termino = termino.toLowerCase();

    for (let producto of this.productos) {
      if (producto && producto.nombreproducto) {
        let nombreproducto = producto.nombreproducto.toLowerCase();
        if (nombreproducto.indexOf(termino) >= 0) {
          productosArr.push(producto);
        }
      }
    }

    return productosArr;
  }
}
