import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})

export class PersonaRegistroComponent implements OnInit {

  persona: Persona;
  constructor(private personaServie: PersonaService) { }

  ngOnInit(): void {
    this.persona = new Persona;
  }

  registrar(){
    this.personaServie.post(this.persona);
    alert('Se ha agregado una nueva persona: '+ JSON.stringify(this.persona));
  }

}
