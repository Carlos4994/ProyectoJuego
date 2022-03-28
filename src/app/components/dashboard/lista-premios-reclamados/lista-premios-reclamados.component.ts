import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PremioService } from 'src/app/services/premio.service';

@Component({
  selector: 'app-lista-premios-reclamados',
  templateUrl: './lista-premios-reclamados.component.html',
  styleUrls: ['./lista-premios-reclamados.component.css']
})
export class ListaPremiosReclamadosComponent implements OnInit {

  constructor(private _premioService: PremioService,
    private toastr: ToastrService) { }
  premios: any[] = [];
  ngOnInit(): void {
    this.getPremios();
  }

  getPremios() {
    this._premioService.getPremiosReclamados().subscribe(data => {
      this.premios = [];
      data.forEach((element: any) => {
        this.premios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      
    });
  }

}
