import { Routes } from '@angular/router';   
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { ListaclienteComponent } from './pages/listacliente/listacliente.component'; 
import { ServicioComponent } from './pages/servicio/servicio.component';
import { CardsComponent } from './pages/cards/cards.component';
    

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'scercade', component: AboutComponent},
    {path: 'listacliente', component: ListaclienteComponent},
    {path: 'servicio', component: ServicioComponent},
    {path: 'cards', component: CardsComponent},
    {path: '**', component: CardsComponent},
    
];
