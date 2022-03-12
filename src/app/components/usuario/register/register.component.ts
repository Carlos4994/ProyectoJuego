import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { PersonaService } from '../../../services/persona.service';
import { Persona } from '../../../models/Persona';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  personas:Persona[]=[];

  jugador:Persona | undefined;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
    private _errorService: ErrorService,
    private _servicePersona:PersonaService) {
    this.registerForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nombre:['',[Validators.required]],
      comunidad:['',],
      numero:['',[Validators.required]],
      operadora: ['',],
      gestor:['',],
      fechaNacimiento:['',],
      repetirPassword: ['']
    }, { validator: this.checkPassword })
  }

  ngOnInit(): void {
  }

  register() {
    const usuario = this.registerForm.get('usuario')?.value;
    const password = this.registerForm.get('password')?.value;


    this.loading = true;
    this.afAuth.createUserWithEmailAndPassword(usuario, password).then(rta => {
      rta.user?.sendEmailVerification();
      this.toastr.success('Enviamos un correo electronico para verificar su cuenta!', 'Usuario registrado!');
      this.router.navigate(['/usuario'])
    }).catch(error => {
      this.registerForm.reset();
      this.loading = false;
      this.toastr.error(this._errorService.error(error.code), 'Error');
    })

  }
// agregar Persona

agregarPersona() {
  const persona: any = {
    email:this.registerForm.value.usuario,
    nombre: this.registerForm.value.nombre,
    numero:this.registerForm.value.numero,
    operadora:this.registerForm.value.operadora,
    comunidad: this.registerForm.value.comunidad,
    gestor: this.registerForm.value.gestor,
    fechaNacimiento:this.registerForm.value.fechaNacimiento,
    puntos:0,
   
  }
  this.loading = true;
  this._servicePersona.crearPersona(persona).then(() => {
    this.toastr.success('El empleado fue registrado con exito!', 'Empleado Registrado', {
      positionClass: 'toast-bottom-right'
    });
    this.loading = false;
    this.router.navigate(['/']);
  }).catch(error => {
    console.log(error);
    this.loading = false;
  })
}


obtenerPersona(){
 this._servicePersona.getPersonas().subscribe(data => {
    this.personas = [];
    data.forEach((element: any) => {
      this.personas.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
      })
    });
    
    this.personas.forEach(element => {
      if (element.email=='fff@gmail.com') {
        this.jugador=element;
      }
    });

    console.log(this.jugador);
  });



}
  /* error(code: string): string {

    switch (code) {

      // Email ya registrado
      case 'auth/email-already-in-use':
        return 'El Correo ya esta registrado'

      // Correo invalido
      case 'auth/invalid-email':
        return 'El Correo es invalido'

      // La Contraseña es muy debil
      case 'auth/weak-password':
        return 'La Contraseña es muy debil'

      default:
        return 'Error desconocido';
    }
  } */

  checkPassword(group: FormGroup): any {
    const pass = group.controls.password?.value;
    const confirmPassword = group.controls.repetirPassword?.value;
    return pass === confirmPassword ? null : { notSame: true }
  }

}
