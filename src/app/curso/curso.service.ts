import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
   
  private cursos: any [] = [];
  constructor() {}

getCurso(id: string): any{
  return this.cursos.find(curso => curso.id == id);
}
saveCurso(formulario:NgForm){
  this.cursos.push(formulario.value)

  }
}
