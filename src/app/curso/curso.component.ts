import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

    cursoAtual: string = " ";
    curso: any = [{
      nome:null,
      descricao:null,
      email:null
      },{
        nome:null,
        descricao:null,
        email:null
      },{
        nome:null,
        descricao:null,
        email:null
      }
    ]

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
   onSubmit(formulario: NgForm){
      this.curso.push(this.curso.nome,this.curso.descricao,this.curso.email)
   }   
}
