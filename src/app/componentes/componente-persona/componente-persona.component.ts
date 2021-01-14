import { Component, OnInit } from '@angular/core';
import { Persona } from '../../clases/persona';

@Component({
  selector: 'app-componente-persona',
  templateUrl: './componente-persona.component.html',
  styleUrls: ['./componente-persona.component.css']

})
export class ComponentePersonaComponent{
  persona = new Persona("juan","vazquez","masculino",19)
}
