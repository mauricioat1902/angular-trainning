import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'a origem',
    rating: 4.5523,
    numeroPaginas: 356,
    preco: 45.99,
    dataLancamento: new Date(2017, 4, 23),
    url: 'http://www.editoraarqueiro.com.br/livros/origem/'
  };

  constructor() { }

  ngOnInit() {
  }

}
