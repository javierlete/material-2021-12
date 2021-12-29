import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface Persona {
  nombre: string;
  sexo: string;
  comentarios: string;
  edad: number;
}

const ELEMENT_DATA: Persona[] = [
  { nombre: 'Juan', sexo: 'Masculino', comentarios: 'Uno', edad: 20 },
  { nombre: 'Maria', sexo: 'Femenino', comentarios: 'Dos', edad: 22 },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatTable) table!: MatTable<any>;
  
  resultado: string = 'Rellena los datos y acepta';

  displayedColumns: string[] = ['nombre', 'sexo', 'edad', 'comentarios'];
  dataSource = ELEMENT_DATA;

  datos: Persona = {
    nombre: '',
    sexo: '',
    comentarios: '',
    edad: 50
  };

  aceptar() {
    this.dataSource.push(this.datos);
    this.table.renderRows();
  }
}
