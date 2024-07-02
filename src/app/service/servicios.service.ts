import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { DatePipe } from "@angular/common";
import { ProcedureParam } from "../pages/models/procedureparam";
import { ServicioModel } from "../pages/models/servicio.models";

const apiUlr = 'https://disweb.jokamaliva.com/jvn/';
const appid = '';
const apillave = '';

@Injectable({ providedIn: 'root' })
export class Sservicio {
  constructor(private http: HttpClient, public datepipe: DatePipe) { }

  selServicio(procedureParam: ProcedureParam) {
    console.log('1');
    const myheader = new HttpHeaders().set('Content-Type', 'application/form-data');
    let body = new HttpParams();
    body = body.set('idusuaro', '1');
    body = body.set('llave', '2');

    body = body.set('pCampo0', procedureParam.pCampo0);
    body = body.set('pValor0', procedureParam.pValor0);
    body = body.set('pCampo1', procedureParam.pCampo1);
    body = body.set('pValor1', procedureParam.pValor1);
    body = body.set('pCampo2', procedureParam.pCampo2);
    body = body.set('pValor2', procedureParam.pValor2);
    body = body.set('pCampo3', procedureParam.pCampo3);
    body = body.set('pValor3', procedureParam.pValor3);
    body = body.set('pCampo4', procedureParam.pCampo4);
    body = body.set('pValor4', procedureParam.pValor4);
    body = body.set('pCampo5', procedureParam.pCampo5);
    body = body.set('pValor5', procedureParam.pValor5);
    body = body.set('pCampo6', procedureParam.pCampo6);
    body = body.set('pValor6', procedureParam.pValor6);
    body = body.set('pCampo7', procedureParam.pCampo7);
    body = body.set('pValor7', procedureParam.pValor7);

    return this.http.post<ServicioModel[]>(apiUlr + 'selservicio', body)
      .pipe(map((resp: any) => {
       
        if (resp['info'] != null) {
          console.log(resp);
          if (resp['mesaje'] != null) {
            console.log('mesaje');
            return resp['info'].item;
          } else {
            console.log('FAILD');
            return null;
          }
        } else {
          console.log('error conexion');
          return null;
        }
      }));
  }

  addServicio(servicio: ServicioModel): Observable<any> {
    const myheader = new HttpHeaders().set('Content-Type', 'application/form-data');
    let body = new HttpParams();
    body = body.set('pidservicio', servicio.idservicio.toString());
    body = body.set('pnombre', servicio.nombre);
    body = body.set('pdescripcion', servicio.descripcion);
    body = body.set('pprecio', servicio.precio.toString());
    //body = body.set('pduracion', servicio.duracion);

    return this.http.post(apiUlr + 'addServicio', body)
      .pipe(map((resp: any) => {
        console.log('respuesta');
        console.log(resp);
        if (resp['info'] != null) {
          if (resp['mesaje'] != null) {
            return resp['info'].item;
          } else {
            console.log('error conexion');
            return null;
          }
        } else {
          console.log('error coneccion');
          return null;
        }
      }));
  }
}
