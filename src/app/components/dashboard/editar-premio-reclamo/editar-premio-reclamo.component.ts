import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PremioService } from '../../../services/premio.service';

@Component({
  selector: 'app-editar-premio-reclamo',
  templateUrl: './editar-premio-reclamo.component.html',
  styleUrls: ['./editar-premio-reclamo.component.css']
})
export class EditarPremioReclamoComponent implements OnInit {

  editarPremio: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Insentivo';
  constructor(private fb: FormBuilder,
    private _premiosService: PremioService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.editarPremio = this.fb.group({
      nombre: ['', Validators.required],
      persona: ['', Validators.required],
      valor: ['', Validators.required],
      dado: ['', Validators.required]

    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit(): void {

    this.esEditar();
  }

  agregarEditarPremio() {
    this.submitted = true;

    if (this.editarPremio.invalid) {
      return;
    }

    if (this.id === null) {

    } else {
      this.editarPremioReclamado(this.id);
    }

  }

  editarPremioReclamado(id: string) {

    const premioReclamdoeditado: any = {
       nombre: this.editarPremio.value.nombre,
       persona: this.editarPremio.value.persona,
       valor: this.editarPremio.value.valor,
       dado: this.editarPremio.value.dado,      
   
    }

    this.loading = true;

    this._premiosService.actualizarpremioReclamado(id, premioReclamdoeditado).then(() => {
      this.loading = false;
      this.toastr.info('El premio relamdo fue modificado con exito', 'Premio Reclamdo modificado', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/dashboard/listarPremiosReclamados']);
    })
  }


  esEditar() {
    this.titulo = 'Editar Insentivo'
    if (this.id !== null) {
      this.loading = true;
      this._premiosService.getpremioReclamado(this.id).subscribe(data => {
        this.loading = false;
        this.editarPremio.setValue({
          nombre: data.payload.data()['nombre'],
          persona: data.payload.data()['persona'],
          valor: data.payload.data()['valor'],
          dado: data.payload.data()['dado'],
        })
      })
    }
  }


}
