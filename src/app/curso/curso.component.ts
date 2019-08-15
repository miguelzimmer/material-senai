import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

    cursoAtual: string = " ";


  constructor() { }

  ngOnInit() {
  }
  CursoAlternado(valor:string){
    if (valor == 'Desenvolvimento'){
      return this.cursoAtual = valor;
    }
    if (valor == 'redes') {
      return this.cursoAtual = valor;
    }
    return this.cursoAtual = " ";
   }
}
