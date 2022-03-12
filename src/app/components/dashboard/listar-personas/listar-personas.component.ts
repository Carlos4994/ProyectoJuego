import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../../services/persona.service';
import { Persona } from '../../../models/Persona';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonasComponent implements OnInit {
 personas:Persona[]=[];
  constructor(private _personasService:PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
  }


  getPersonas() {
    this._personasService.getPersonas().subscribe(data => {
      this.personas = [];
      data.forEach((element: any) => {
        this.personas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.personas);
    });
  }


}
