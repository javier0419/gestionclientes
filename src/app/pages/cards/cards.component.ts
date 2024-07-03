import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../service/productos.service';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  productos: any[]=[];
  termino:string='';
  constructor(private activateRoute:ActivatedRoute,
    private _productosService:ProductosService  ){
    }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      this.termino=params['termino'];
     this.productos= this._productosService.buscarProductos(this.termino);
console.log(this.productos);
    });
  }

}