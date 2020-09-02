import { CriarCursoComponent } from './criar-curso.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from '../cursos/cursos.service';


@NgModule({
  declarations: [
    CriarCursoComponent
  ],
  imports: [
    CommonModule,
  ],
  //providers: [CursosService],
  exports: [CriarCursoComponent] //Tonra possível exportar e expor esse componente para outros módulos
})
export class CriarCursoModule { }
