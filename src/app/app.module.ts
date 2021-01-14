import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentePersonaComponent } from './componentes/componente-persona/componente-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePersonaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] //Aqui se asigna el componente principal
})
export class AppModule { }
