import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/User';
import { ErrorService } from 'src/app/services/error.service';
import { Rol } from '../../../models/Rol';
import { RolService } from '../../../services/rol.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
listRol:Rol[]=[];
suscriptionRol: Subscription = new Subscription();
roladm=false;
  loginForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
              private afAuth: AngularFireAuth,
              private _errorService: ErrorService,
              private toastr: ToastrService,
              private router: Router,
              private _rolService: RolService) { 
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getRol();
  }



  login() {
    const usuario = this.loginForm.get('usuario')?.value;
    const password = this.loginForm.get('password')?.value;

    this.loading = true;
    this.afAuth.signInWithEmailAndPassword(usuario, password).then((respuesta) => {
    
      if(respuesta.user?.emailVerified == false) {
        this.router.navigate(['/usuario/verificarCorreo'])
      } else {
        // Lo redireccionamos al dahsboard
        this.setLocalStorage(respuesta.user)
        localStorage.setItem('nombre',usuario)

        this.getTipoRol(usuario);
        if(this.roladm==true){
          this.router.navigate(['/dashboard'])
        }else{
          this.router.navigate(['/inicio'])
        }
        
      }
     
      this.loading = false;
    }, error => {
      this.loading = false;
      console.log(error);
      this.toastr.error(this._errorService.error(error.code), 'Error')
      this.loginForm.reset();
    })

  }

  setLocalStorage(user: any) {
    const usuario: User = {
      uid: user.uid,
      email: user.email
    }

    localStorage.setItem('user', JSON.stringify(usuario));
  }

  getRol(){
    this.suscriptionRol == this._rolService.getRol().subscribe(data=>{
      this.listRol = [];
    
      data.forEach((element:any) => {
        this.listRol.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
  
       
      });
     
    }, error => {
      console.log(error);
      
    })
  
  }


  getTipoRol(email:string){
    this.listRol.forEach(element => {

      if (element.email==email) {
       this.roladm=true;
       console.log(element.email);
      } 
    });
  }


}
