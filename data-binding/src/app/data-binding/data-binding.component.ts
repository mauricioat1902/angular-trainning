import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = "";
  valorSalvo: string = "";

  isMouseOver: boolean = false;

  nome: string = "abc";
  valorInicial: number = 15;

  pessoa: any = {
    nome: 'Mauricio',
    idade: 27
  }

  nomeDoCurso: string = "Angular";

  constructor() { }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  ngOnInit() {
  }

  botaoClicado() {
    alert('botão clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    //console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }
}
