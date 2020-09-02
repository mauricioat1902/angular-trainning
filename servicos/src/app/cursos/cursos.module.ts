import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from '../cursos/cursos.service';
import { CursosComponent } from './cursos.component';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [CursosComponent], //Torna possível exportar e expor esse componente para outros módulos
  providers: [CursosService]
})
export class CursosModule { }
