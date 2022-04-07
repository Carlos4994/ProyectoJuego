import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { PremioService } from 'src/app/services/premio.service';

@Component({
  selector: 'app-reclamar-premio',
  templateUrl: './reclamar-premio.component.html',
  styleUrls: ['./reclamar-premio.component.css']
})
export class ReclamarPremioComponent implements OnInit {
  reclamarForm: FormGroup;
  
  premios: any[] = [];

  premiosv: any[] = [];

  id:string='';
  persona:any;
  reclamarPremio:any;

  valorCostoReclamo= 0;
  nombrePremioReclamado='';

puntosDeJugador='';

  constructor(private fb: FormBuilder,private _premioService: PremioService,
    private _personaService:PersonaService,
    private router: Router,) {
this.reclamarForm=this.fb.group({
  premioselect: ['',],
})

     }

  ngOnInit(): void {
    this.getPremios();
    this.obtenerJugadorPuntos();


   
  }

  getPremios() {
    this._premioService.getPremios().subscribe(data => {
      this.premios = [];
      data.forEach((element: any) => {
        this.premios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      
    });
  }

crearReclamarPemio(){
    const reclamarPremio: any = {
    persona:localStorage.getItem('nombre'),
     nombre:this.nombrePremioReclamado,
     valor:this.valorCostoReclamo,
     dado:0,
     fecha:new Date(),
     
    }

    this._premioService.agregarReclamarPrmeio(reclamarPremio).then(() => {
     
     // this.router.navigate(['/']);
    }).catch(error => {
      console.log(error);
     
    })

  
  
}


buscarPremio(id:string){
this.premios.forEach(element => {
  if (element.id == id) {
   this.nombrePremioReclamado=element.nombre;
    this.valorCostoReclamo=element.valor;
  }
});


}
  obtenerJugador(){
    var cont=0;
  
     this.id=localStorage.getItem('idjugador')+'';
     this._personaService.getPersona(this.id).subscribe(data => {
      this.buscarPremio(this.reclamarForm.value.premioselect);
      if((data.payload.data()['puntos']-this.valorCostoReclamo)>=0){
        this.persona={
          email:data.payload.data()['email'],
          nombre: data.payload.data()['nombre'],
          numero: data.payload.data()['numero'],
          operadora: data.payload.data()['operadora'],
          comunidad: data.payload.data()['comunidad'],
          gestor: data.payload.data()['gestor'],
          fechaNacimiento: data.payload.data()['fechaNacimiento'],
          puntos: data.payload.data()['puntos'] -this.valorCostoReclamo
       }
       while (cont<1) {
        this.crearReclamarPemio();
        this._personaService.actualizarPersona(this.id,this.persona);
        cont++;
       }
      }else{
      console.log('No tiene puntos suficientes');
      }
      this.router.navigate(['/inicio']);
     }
   
     );
     
    
    
   }




   obtenerJugadorPuntos(){
   
  
     this.id=localStorage.getItem('idjugador')+'';
     this._personaService.getPersona(this.id).subscribe(data => {
     // console.log(data.payload.data()['puntos']);
      localStorage.setItem('puntosJugador',data.payload.data()['puntos']+'');
     }
     );
     
     this.puntosDeJugador= localStorage.getItem('puntosJugador')+'';
     this.premios.forEach(element => {
      console.log('hola')
    });
    
   }
}
