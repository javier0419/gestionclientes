import { CommonModule } from '@angular/common';
import { ProcedureParam } from '../models/procedureparam';
import { Component, OnInit } from '@angular/core';
import { Scliente  } from '../../service/clientes.service';
import { ClienteModel } from '../models/cliente.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listacliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listacliente.component.html',
  styleUrl: './listacliente.component.css'
})
export class ListaclienteComponent implements OnInit {
  procedureParam: ProcedureParam = new ProcedureParam();
  clientes: ClienteModel[] = [];

  constructor(private clienteService: Scliente) {}

  ngOnInit(): void {
    this.procedureParam.inicia();
    this.loadClientes();
  }

  loadClientes() {
    this.clienteService.selCliente(this.procedureParam)
      .subscribe((resp: any) => {
        this.clientes = resp;
      });
  }
  addCliente() {
    Swal.fire({
      title: 'Añadir Cliente',
      html: `<input type="text" id="nombre" class="swal2-input" placeholder="Nombre">
             <input type="text" id="apellido" class="swal2-input" placeholder="Apellido">
             <input type="text" id="genero" class="swal2-input" placeholder="Género">
             <input type="text" id="ciudad" class="swal2-input" placeholder="Ciudad">
             <input type="text" id="pais" class="swal2-input" placeholder="País">
             <input type="email" id="email" class="swal2-input" placeholder="Email">
             <input type="password" id="contrasena" class="swal2-input" placeholder="Contraseña">`,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
        const apellido = (document.getElementById('apellido') as HTMLInputElement).value;
        const genero = (document.getElementById('genero') as HTMLInputElement).value;
        const ciudad = (document.getElementById('ciudad') as HTMLInputElement).value;
        const pais = (document.getElementById('pais') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const contrasena = (document.getElementById('contrasena') as HTMLInputElement).value;

        if (!nombre || !apellido || !email || !contrasena) {
          Swal.showValidationMessage('Por favor complete todos los campos');
          return false;
        }

        return { nombre, apellido, genero, ciudad, pais, email, contrasena };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const cliente = new ClienteModel();
        cliente.nombre = result.value.nombre;
        cliente.apellido = result.value.apellido;
        cliente.genero = result.value.genero;
        cliente.ciudad = result.value.ciudad;
        cliente.pais = result.value.pais;
        cliente.email = result.value.email;
        cliente.contrasena = result.value.contrasena;

        this.clienteService.addCliente(cliente).subscribe(() => {
          this.loadClientes();
          Swal.fire('Guardado', 'Cliente añadido con éxito', 'success');
        });
      }
    });
  }
  editCliente(cliente: ClienteModel) {
    Swal.fire({
      title: 'Editar Cliente',
      html: `<input type="text" id="nombre" class="swal2-input" value="${cliente.nombre}" placeholder="Nombre">
             <input type="text" id="apellido" class="swal2-input" value="${cliente.apellido}" placeholder="Apellido">
             <input type="text" id="genero" class="swal2-input" value="${cliente.genero}" placeholder="Género">
             <input type="text" id="ciudad" class="swal2-input" value="${cliente.ciudad}" placeholder="Ciudad">
             <input type="text" id="pais" class="swal2-input" value="${cliente.pais}" placeholder="País">
             <input type="email" id="email" class="swal2-input" value="${cliente.email}" placeholder="Email">
             <input type="password" id="contrasena" class="swal2-input" value="${cliente.contrasena}" placeholder="Contraseña">`,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
        const apellido = (document.getElementById('apellido') as HTMLInputElement).value;
        const genero = (document.getElementById('genero') as HTMLInputElement).value;
        const ciudad = (document.getElementById('ciudad') as HTMLInputElement).value;
        const pais = (document.getElementById('pais') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const contrasena = (document.getElementById('contrasena') as HTMLInputElement).value;

        if (!nombre || !apellido || !email || !contrasena) {
          Swal.showValidationMessage('Por favor complete todos los campos');
          return false;
        }

        return { idcliente: cliente.idcliente, nombre, apellido, genero, ciudad, pais, email, contrasena };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCliente = new ClienteModel();
        updatedCliente.idcliente = result.value.idcliente;
        updatedCliente.nombre = result.value.nombre;
        updatedCliente.apellido = result.value.apellido;
        updatedCliente.genero = result.value.genero;
        updatedCliente.ciudad = result.value.ciudad;
        updatedCliente.pais = result.value.pais;
        updatedCliente.email = result.value.email;
        updatedCliente.contrasena = result.value.contrasena;

        this.clienteService.updateCliente(updatedCliente).subscribe(() => {
          this.loadClientes();
          Swal.fire('Guardado', 'Cliente editado con éxito', 'success');
        });
      }
    });
  }

  
}