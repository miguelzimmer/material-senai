import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso/curso.component';
import { AlunoComponent } from './aluno/aluno.component';
import {RouterModule, Routes} from '@angular/router';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';


const routes: Routes = [
  {path: 'curso',component: CursoComponent},
  {path: 'aluno',component:AlunoComponent},
  {path: '', redirectTo: '/curso',pathMatch:'full'},
  { path: 'cursodetail/:id',component:CursoDetailComponent}
];




@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
