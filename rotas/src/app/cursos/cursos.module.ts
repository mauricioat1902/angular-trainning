import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CursosService } from './../../../../servicos/src/app/cursos/cursos.service';
import { CursosComponent } from './cursos.component';
import { NgModule } from "@angular/core";
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosRoutingModule } from './cursos.routing.module';
//import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CursosRoutingModule
    //RouterModule
  ],
  
  exports: [],

  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule {}