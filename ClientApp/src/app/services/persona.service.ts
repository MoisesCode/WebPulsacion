import { Injectable } from '@angular/core';
import { Persona } from '../Pulsacion/models/persona';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  constructor() { }

  get(): Persona[]{
    return JSON.parse(localStorage.getItem('datos'))
  }

  post(persona: Persona){
    let personas: Persona[] = [];
    if(this.get() != null){
      personas = this.get();
    }

    this.calcularPulsacion(persona);
    personas.push(persona);
    localStorage.setItem('datos',JSON.stringify(personas));
  }

  calcularPulsacion(persona: Persona){
    if(persona.sexo =='Masculino'){
      persona.pulsacion = (210 - persona.edad)/10;
    }else if(persona.sexo =='Femenino'){
      persona.pulsacion = (220 - persona.edad)/10;
    }
  }
}
