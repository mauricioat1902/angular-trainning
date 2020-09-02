import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  //@Input permite que receba um valor "inputado" no componente. Ver data-binding html
  @Input('nome') nomeCurso: string = "";

  constructor() { }

  ngOnInit() {
  }

}
