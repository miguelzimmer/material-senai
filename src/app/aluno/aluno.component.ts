import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunosDesenv:string[ ];
  alunosRedes: string [ ];
  alunos: any = {
    nome:null,
    descricao:null,
    email:null

  }



  constructor() { }

  ngOnInit() {
    
    this.alunosDesenv = ['pedro','maria','jose']
    this.alunosRedes = ['miguel','gabriel','samara']

  }
}
