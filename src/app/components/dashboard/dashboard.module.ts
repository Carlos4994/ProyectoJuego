import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

// Componentes
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListCuestionariosComponent } from './list-cuestionarios/list-cuestionarios.component';
import { CrearQuizzComponent } from './crear-quizz/crear-quizz.component';
import { CrearPreguntasComponent } from './crear-preguntas/crear-preguntas.component';
import { ListPreguntasComponent } from './list-preguntas/list-preguntas.component';
import { VerCuestionarioComponent } from './ver-cuestionario/ver-cuestionario.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { CrearProvinciaComponent } from './crear-provincia/crear-provincia.component';
import { ListarPersonasComponent } from './listar-personas/listar-personas.component';
import { ListPremiosComponent } from './list-premios/list-premios.component';
import { CrearPremioComponent } from './crear-premio/crear-premio.component';
import { ListaPremiosReclamadosComponent } from './lista-premios-reclamados/lista-premios-reclamados.component';
import { EditarPremioReclamoComponent } from './editar-premio-reclamo/editar-premio-reclamo.component';


@NgModule({
  declarations: [
    DashboardComponent, 
    NavbarComponent, 
    ListCuestionariosComponent, 
    CrearQuizzComponent, CrearPreguntasComponent, ListPreguntasComponent, VerCuestionarioComponent, EstadisticasComponent, CrearProvinciaComponent, ListarPersonasComponent, ListPremiosComponent, CrearPremioComponent, ListaPremiosReclamadosComponent, EditarPremioReclamoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
