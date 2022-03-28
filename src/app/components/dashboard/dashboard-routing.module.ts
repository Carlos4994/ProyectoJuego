import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RespuestaUsuarioComponent } from '../shared/respuesta-usuario/respuesta-usuario.component';

// Componentes
import { CrearPreguntasComponent } from './crear-preguntas/crear-preguntas.component';
import { CrearQuizzComponent } from './crear-quizz/crear-quizz.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ListCuestionariosComponent } from './list-cuestionarios/list-cuestionarios.component';
import { VerCuestionarioComponent } from './ver-cuestionario/ver-cuestionario.component';
import { CrearProvinciaComponent } from './crear-provincia/crear-provincia.component';
import { ListarPersonasComponent } from './listar-personas/listar-personas.component';
import { ListPremiosComponent } from './list-premios/list-premios.component';
import { CrearPremioComponent } from './crear-premio/crear-premio.component';
import { ListaPremiosReclamadosComponent } from './lista-premios-reclamados/lista-premios-reclamados.component';
import { EditarPremioReclamoComponent } from './editar-premio-reclamo/editar-premio-reclamo.component';

const routes: Routes = [
  { path: '', component: ListCuestionariosComponent },
  { path: 'crearQuizz', component: CrearQuizzComponent },
  { path: 'crearPreguntas', component: CrearPreguntasComponent },
  { path: 'verCuestionario/:id', component: VerCuestionarioComponent },
  { path: 'estadisticas/:id', component: EstadisticasComponent },
  { path: 'respuestaUsuarioAdmin/:id', component: RespuestaUsuarioComponent },
  { path: 'crearProvincia', component: CrearProvinciaComponent },
  { path: 'listarPersonas', component: ListarPersonasComponent },
  { path: 'listarPremio', component: ListPremiosComponent },
  { path: 'crearPremio', component: CrearPremioComponent },
  { path: 'editarPremio/:id', component: CrearPremioComponent },
  { path: 'listarPremiosReclamados', component: ListaPremiosReclamadosComponent },
  { path: 'editarPremiosReclamados/:id', component: EditarPremioReclamoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
