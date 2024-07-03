import { Injectable } from "@angular/core";
import { ProductoModel } from "../pages/models/producto.models"; 
@Injectable({providedIn: 'root'})

export class ProductosService{
    constructor(){
        console.log('servicio listo para usar!!!');
    }
    private productos: ProductoModel[] = [
        { idproducto: 1, nombreproducto: "Audífonos", descripcion: "assets/img/1audi.jpg", precio: 100 },
        { idproducto: 2, nombreproducto: "Tenis", descripcion: "assets/img/2tenis.jpg", precio: 200 },
        { idproducto: 3, nombreproducto: "Reloj", descripcion: "assets/img/3reloj.jpg", precio: 300 },
      ];
      
    //nombre del metodo : objeto que retorna
    getProductos(): ProductoModel[]{
        return this.productos;
    }
    
    //devuelve un producto por id
    getProducto(id:number){
        return this.productos[id];
    }
    //buscamos productos por un parametro
    buscarProductos(termino:string):ProductoModel[]{
        let productosArr: ProductoModel[]=[];
        termino=termino.toLowerCase();
        for(let i=0; i<this.productos.length;i++){
            let producto=this.productos[i];
            let nombreproducto=producto.nombreproducto.toLowerCase();
            if(nombreproducto.indexOf(termino)>=0){
                productosArr.push(producto)
            }
        }
        return productosArr;
    }
}