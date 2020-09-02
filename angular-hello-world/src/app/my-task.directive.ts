import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Task } from './task';

@Directive({
  selector: '[myTask]'
})
export class MyTaskDirective {

  private _myTask : Task;

  constructor(private el : ElementRef) {
    this.el.nativeElement.innerHTML += 'conteúdo inserido';
  }

  get myTask() {
    return this._myTask;
  }

  @Input()//faz com que pegue o valor passado na diretiva myTask usada na tag
  set myTask(value : Task) {
    this._myTask = value;
    this.changeColorTask();
  }

  //@Input()//faz com que pegue o valor passado na diretiva myTask usada na tag
  //myTask : Task;

  @HostListener('click')
  onClick() {
    alert(this.myTask);
  }

  changeColorTask() {
    this.el.nativeElement.style.color = this.myTask.value > 5 ? 'green' : 'red';
  }
}
