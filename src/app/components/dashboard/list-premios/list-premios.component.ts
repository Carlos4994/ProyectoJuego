import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PremioService } from '../../../services/premio.service';

@Component({
  selector: 'app-list-premios',
  templateUrl: './list-premios.component.html',
  styleUrls: ['./list-premios.component.css']
})
export class ListPremiosComponent implements OnInit {
  premios: any[] = [];
  constructor(private _premioService: PremioService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getPremios();
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

  eliminarEmpleado(id: string) {
    this._premioService.eliminarpremio(id).then(() => {
      console.log('empelado eliminado con exito');
      this.toastr.error('El empleado fue eliminado con exito', 'Registro eliminado!', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    })
  }
}
