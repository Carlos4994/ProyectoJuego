import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PremioService } from 'src/app/services/premio.service';

@Component({
  selector: 'app-crear-premio',
  templateUrl: './crear-premio.component.html',
  styleUrls: ['./crear-premio.component.css']
})
export class CrearPremioComponent implements OnInit {
  createEmpleado: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Premio';
  constructor(
    private fb: FormBuilder,
    private _premioService: PremioService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.createEmpleado = this.fb.group({
      nombre: ['', Validators.required],
      valor: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    }

  ngOnInit(): void {
    this.esEditar();
  }


  agregarEditarEmpleado() {
    this.submitted = true;

    if (this.createEmpleado.invalid) {
      return;
    }

    if (this.id === null) {
      this.agregarPremio();
    } else {
      this.editarPremimo(this.id);
    }

  }

  agregarPremio() {
    const premio: any = {
      nombre: this.createEmpleado.value.nombre,
      valor: this.createEmpleado.value.valor,
    }
    this.loading = true;
    this._premioService.agregarPremio(premio).then(() => {
      this.toastr.success('El premio fue registrado con exito!', 'Premio Registrado', {
        positionClass: 'toast-bottom-right'
      });
      this.loading = false;
      this.router.navigate(['/dashboard/listarPremio']);
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  editarPremimo(id: string) {

    const premio: any = {
      nombre: this.createEmpleado.value.nombre,
      valor: this.createEmpleado.value.valor,      
    }

    this.loading = true;

    this._premioService.actualizarpremio(id, premio).then(() => {
      this.loading = false;
      this.toastr.info('El empleado fue modificado con exito', 'Empleado modificado', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/list-empleados']);
    })
  }


  esEditar() {
    this.titulo = 'Editar Premio'
    if (this.id !== null) {
      this.loading = true;
      this._premioService.getpremio(this.id).subscribe(data => {
        this.loading = false;
        this.createEmpleado.setValue({
          nombre: data.payload.data()['nombre'],
          valor: data.payload.data()['valor'],
        })
      })
    }
  }


}
