import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="size">Hola mundo... una etiqueta</p>
    <button class="btn btn-primary" (click)="size=size-4">
      <i class="fa fa-minus"></i>
    </button>
    <button class="btn btn-primary" (click)="size=size+4">
      <i class="fa fa-plus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  private size: number;

  constructor() {
    this.size = 55;
  }

  ngOnInit() {
  }

}