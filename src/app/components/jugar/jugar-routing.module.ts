import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RespuestaUsuarioComponent } from '../shared/respuesta-usuario/respuesta-usuario.component';

// Componentes
import { ContadorInicialComponent } from './contador-inicial/contador-inicial.component';
import { IngresarNombreComponent } from './ingresar-nombre/ingresar-nombre.component';
import { RealizarQuizzComponent } from './realizar-quizz/realizar-quizz.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReclamarPremioComponent } from './reclamar-premio/reclamar-premio.component';

const routes: Routes = [
  { path: '', component: IngresarNombreComponent },
  { path: 'iniciarContador', component: ContadorInicialComponent },
  { path: 'realizarQuizz', component: RealizarQuizzComponent },
  { path: 'respuestaUsuario/:id', component: RespuestaUsuarioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'reclamar', component: ReclamarPremioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugarRoutingModule { }
