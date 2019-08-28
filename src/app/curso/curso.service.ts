import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
   
  private cursos: any [] = [];
  constructor() {}

getCurso(){
  return this.cursos;
}
saveCurso(formulario:NgForm){
  this.cursos.push(formulario.value)

  }
}
