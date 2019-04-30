import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: []
})
export class ClassesComponent implements OnInit {

  alert: string = "alert-danger"
  propietes: object = {
    danger: false
  }
  loading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ejecuta(){
    this.loading = true;
    setTimeout( () => this.loading = false, 3000);
  }
}
