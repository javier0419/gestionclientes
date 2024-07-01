import { CommonModule } from '@angular/common';
import { ProcedureParam } from '../models/procedureparam';
import { Component, OnInit } from '@angular/core';
import { Scliente  } from '../../service/clientes.service';

@Component({
  selector: 'app-listacliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listacliente.component.html',
  styleUrl: './listacliente.component.css'
})
export class ListaclienteComponent implements OnInit{
  procedureParam : ProcedureParam = new ProcedureParam();
  clientes: any[] = [];
  constructor(private cliente:Scliente){}
  ngOnInit(): void {
    
    this.procedureParam.inicia();    
    this.procedureParam.pCampo0='Cnombre';
    this.procedureParam.pValor0='a';
    // Cnombre => C = like nombre=nombrecolumna (where like nombre '%%')
    // Nidpaciente=> N = idpaciente=nombrecolumna(where idpaciente=1)
    console.log('1');
    this.cliente.selCliente(this.procedureParam)
      .subscribe((resp:any) => {
        this.clientes = resp;

      });

  }
}