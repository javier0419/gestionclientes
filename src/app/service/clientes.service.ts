import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { DatePipe } from "@angular/common";
import { ProcedureParam } from "../pages/models/procedureparam";
import { ClienteModel } from "../pages/models/cliente.models";

const apiUlr = 'https://disweb.jokamaliva.com/jvn/';
const appid = '';
const apillave = '';

@Injectable({ providedIn: 'root' })
export class Scliente {
    constructor(private http: HttpClient, public datepipe: DatePipe) { }

    selCliente(procedureParam: ProcedureParam): Observable<ClienteModel[]> {
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

        return this.http.post<ClienteModel[]>(apiUlr + 'selcliente', body)
            .pipe(map((resp: any) => {
                if (resp['info'] != null) {
                    if (resp['mensaje'] != null) {
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

    addCliente(cliente: ClienteModel): Observable<any> {
        const myheader = new HttpHeaders().set('Content-Type', 'application/form-data');
        let body = new HttpParams();
        // parámetros de inserción
        body = body.set('pidcliente', cliente.idcliente.toString());
        body = body.set('pnombre', cliente.nombre);
        body = body.set('papellido', cliente.apellido);
        body = body.set('pgenero', cliente.genero);
        body = body.set('pciudad', cliente.ciudad);
        body = body.set('ppais', cliente.pais);
        body = body.set('pemail', cliente.email);
        body = body.set('pcontrasena', cliente.contrasena);

        return this.http.post(apiUlr + 'addCliente', body)
            .pipe(map((resp: any) => {
                console.log('respuesta');
                console.log(resp);
                if (resp['info'] != null) {
                    if (resp['mensaje'] != null) {
                        return resp['info'].item;
                    } else {
                        console.log('error conexion');
                        return null;
                    }
                }
            }));
    }
}
