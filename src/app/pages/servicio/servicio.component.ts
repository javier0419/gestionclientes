import { Component } from '@angular/core';
import { ProcedureParam } from '../models/procedureparam';
import { Sservicio } from '../../service/servicios.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css'
})
export class ServicioComponent {
  procedureParam: ProcedureParam = new ProcedureParam();
  servicios: any[] = [];

  constructor(private servicio: Sservicio) {}

  ngOnInit(): void {
    this.procedureParam.inicia();
    // this.procedureParam.pCampo0 = 'T';
    // this.procedureParam.pValor0 = 'a';
    console.log('1');
    this.servicio.selServicio(this.procedureParam)
      .subscribe((resp: any) => {
        console.log('aqui');
        console.log(resp);
        console.log(resp['mesaje']);
        console.log(resp['info']);
        this.servicios = resp;
      });
  }
}
