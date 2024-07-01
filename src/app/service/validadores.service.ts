import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { rejects } from "assert";
import { Observable } from "rxjs";
import { Resolve } from "@angular/router";

interface ErrorValidate{[s: string]: boolean}

@Injectable({ providedIn: 'root'})
export class ValidationsService{
    constructor() { }
    existeUsuario(control: FormControl):
    Promise<ErrorValidate> | Observable<ErrorValidate> {
        if (!control.value){
            return Promise.resolve({} as ErrorValidate);
        }
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value == 'David'){
                    resolve({ existe: true});
                }else{
                    resolve({} as ErrorValidate);
                }
            }, 4000);
        })
    }
    noEjemplo(control: FormControl):ErrorValidate{
        if (control.value?.toLowerCse()==='ejemplo'){
            return {
                noEjemplo: true
            }
        }
        return {} as ErrorValidate;
    }
}


