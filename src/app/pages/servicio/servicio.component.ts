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
    this.procedureParam.pCampo0 = 'Cnombre';
    this.procedureParam.pValor0 = 'a';

    this.servicio.selServicio(this.procedureParam)
      .subscribe((resp: any) => {
        this.servicios = resp;
      });
  }
}
