import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  id: string ='';
  toastr: any;


  constructor(private fb: FormBuilder,
    private _servicePersona: PersonaService,
    private router: Router,
  ) {
    this.createPerfil= this.fb.group({
      nombre:['',[Validators.required]],
      email:['',[Validators.required]],
      numero:['',[Validators.required]],
      operadora:['',[Validators.required]],
      puntos:[''],
      comunidad:[''],
      gestor:[''],
      fechaNacimiento:['']
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
  

  editarPersona() {
    const persona: any = {
      email:this.createPerfil.value.email,
      nombre: this.createPerfil.value.nombre,
      numero:this.createPerfil.value.numero,
      operadora:this.createPerfil.value.operadora,
      comunidad: this.createPerfil.value.comunidad,
      gestor: this.createPerfil.value.gestor,
      fechaNacimiento:this.createPerfil.value.fechaNacimiento,
      puntos:0,
     
    }
    this.loading = true;

    this._servicePersona.actualizarPersona(this.id,persona).then(() => {
      this.loading = false;
      this.toastr.success('Perfil editado correctamente!', 'Perfil editado!');
      
    })
    this.router.navigate(['/']);
  }



  esEditar() {
 
  //  if (this.id !== null) {
      this.loading = true;
      this.id=localStorage.getItem('idjugador')+'';
      this._servicePersona.getPersona(this.id).subscribe(data => {
        this.loading = false;
        this.createPerfil.setValue({
          nombre: data.payload.data()['nombre'],
          email: data.payload.data()['email'],
          numero: data.payload.data()['numero'],
          operadora: data.payload.data()['operadora'],
          puntos:data.payload.data()['puntos'],
          comunidad:data.payload.data()['comunidad'],
          gestor:data.payload.data()['gestor'],
          fechaNacimiento:data.payload.data()['fechaNacimiento'],


          
        })
      })

   // }
  }

// pruebas

obtenerJugador(){
  this.id=localStorage.getItem('idjugador')+'';
  this._servicePersona.getPersona(this.id).subscribe(data => {
   
  const persona:any={
    email:data.payload.data()['email'],
      nombre: data.payload.data()['nombre'],
      numero: data.payload.data()['numero'],
      operadora: data.payload.data()['operadora'],
      comunidad: data.payload.data()['comunidad'],
      gestor: data.payload.data()['gestor'],
      fechaNacimiento: data.payload.data()['fechaNacimiento'],
      puntos: data.payload.data()['puntos']
   }
  console.log(persona.puntos);
  })

}



}
