import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Provincia } from '../../../models/Provincia';
import { ProviciaService } from '../../../services/provicia.service';

@Component({
  selector: 'app-crear-provincia',
  templateUrl: './crear-provincia.component.html',
  styleUrls: ['./crear-provincia.component.css']
})
export class CrearProvinciaComponent implements OnInit {

  suscriptionProvincia: Subscription = new Subscription();
  listProvicia: Provincia[] = [];
  loading = false;

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private _provinciaService: ProviciaService,
    private toastr: ToastrService) { }


  ngOnInit(): void {
    this.getProvicias();
    console.log('hola desde provincias');
    this.listProvicia.forEach(element => {
      console.log(element.nombre);
    });
    
  }

getProvicias(){
  this.suscriptionProvincia == this._provinciaService.getProvincias().subscribe(data=>{
    this.listProvicia = [];
    this.loading = false;
    data.forEach((element:any) => {
      this.listProvicia.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
      })

     
    });
   
  }, error => {
    console.log(error);
    this.toastr.error('Opss.. ocurrio un error', 'Error');
    this.loading = false;
  })

}
  // getCuestionarios() {
    
  //   this.suscriptionProvincia == this._provinciaService.getProvinciaByIdUser().subscribe(data => {
  //      this.listProvicia = [];
  //      this.loading = false;
  //      data.forEach((element:any) => {
  //        this.listProvicia.push({
  //          id: element.payload.doc.id,
  //          ...element.payload.doc.data()
  //        })
  //      });
      
  //    }, error => {
  //      console.log(error);
  //      this.toastr.error('Opss.. ocurrio un error', 'Error');
  //      this.loading = false;
  //    })
  //  }

}
