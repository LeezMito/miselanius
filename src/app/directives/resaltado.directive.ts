import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") newColor: string;

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter' ) mouseEntro () {
    this.el.nativeElement.style.backgroundColor = this.newColor;
  }

  @HostListener('mouseleave' ) mouseSalio () {
    this.el.nativeElement.style.backgroundColor = null;
  }

}
