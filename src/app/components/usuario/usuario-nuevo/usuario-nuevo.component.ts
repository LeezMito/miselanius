import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.parent.params.subscribe( data => {
      console.log('hola bb ' + data['id']);
    } );
  }

  ngOnInit() {
  }

}
