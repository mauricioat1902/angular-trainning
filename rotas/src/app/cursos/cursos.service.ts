import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() {
    return [
      { id: 1, nome: 'Angular 4'},
      { id: 2, nome: 'Java'}
    ]
  }

  getCurso(id: number) {
    let cursos = this.getCursos();
    console.log(cursos);
    for (let index = 0; index < cursos.length; index++) {
      if(cursos[index].id == id) 
        return cursos[index];
    }
    return null;
  }

  constructor() { }
}
