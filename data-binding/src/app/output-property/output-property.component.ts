import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  //EventEmitter - cria um evento
  //@Output permite que possa ser usado pelo componente pai
  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput', {static: true}) campoValorInput: ElementRef;

  incrementa() {
    //this.valor++;
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    //this.valor--;
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit() {
  }
}
