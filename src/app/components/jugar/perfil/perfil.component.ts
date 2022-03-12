import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from '../../../services/persona.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  submitted = false;
  loading = false;
  createPerfil:FormGroup;
  id: string ='YnFMwjY02rnEfZlxPDtf';


  constructor(private fb: FormBuilder,
    private _servicePersona: PersonaService
  ) {
    this.createPerfil= this.fb.group({
      nombre:['',[Validators.required]],
      email:['',[Validators.required]],
      numero:['',[Validators.required]],
      operadora:['',[Validators.required]],
    })
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEditarEmpleado() {
    // this.submitted = true;

    // if (this.createEmpleado.invalid) {
    //   return;
    // }

    // if (this.id === null) {
    //   this.agregarEmpleado();
    // } else {
    //   this.editarEmpleado(this.id);
    // }

  }
  editarEmpleado(id: string) {

    // const empleado: any = {
    //   nombre: this.createEmpleado.value.nombre,
    //   apellido: this.createEmpleado.value.apellido,
    //   documento: this.createEmpleado.value.documento,
    //   salario: this.createEmpleado.value.salario,      
    //   fechaActualizacion: new Date()
    // }

    // this.loading = true;

    // this._empleadoService.actualizarEmpleado(id, empleado).then(() => {
    //   this.loading = false;
    //   this.toastr.info('El empleado fue modificado con exito', 'Empleado modificado', {
    //     positionClass: 'toast-bottom-right'
    //   })
    //   this.router.navigate(['/list-empleados']);
    // })
  }

  esEditar() {
  console.log('hola');
  //  if (this.id !== null) {
      this.loading = true;
      this.id='YnFMwjY02rnEfZlxPDtf';
      this._servicePersona.getPersona(this.id).subscribe(data => {
        this.loading = false;
        this.createPerfil.setValue({
          nombre: data.payload.data()['nombre'],
          email: data.payload.data()['email'],
          numero: data.payload.data()['numero'],
          operadora: data.payload.data()['operadora'],
        })
      })

   // }
  }

}
