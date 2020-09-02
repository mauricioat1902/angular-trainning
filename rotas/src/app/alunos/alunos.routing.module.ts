import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const alunosRoutes = [
  {path: 'alunos', component: AlunosComponent, children : [
    //Rotas filhas, podem ser renderizadas separadamente
    {path: 'novo', component: AlunoFormComponent},
    {path: ':id', component: AlunoDetalheComponent},
    {path: ':id/editar', component: AlunoFormComponent}
  ]},
];
@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule {}