import { Injectable } from '@angular/core';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private aluno: String [] = [];

  constructor() { }

  getAluno() {
    return this.aluno;
  }
  saveAluno(formulario:NgForm){
    this.aluno.push(formulario.value)
    
  }

}