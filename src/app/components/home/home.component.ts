import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
template: `
 <hr>
    <app-ng-style></app-ng-style>


<br><br>
  <p>Nuevo comentario < /p>
    <app-css> </app-css>
    <app-classes> </app-classes>

   <p[appResaltado]="'rgb(155,11,0)'"> Hola mundo </p>

      <app-ng-switch> </app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
