import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
    

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'scercade', component: AboutComponent},
    {path: '**', component: InicioComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes,{useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule{}