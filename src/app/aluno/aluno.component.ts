import { Component, OnInit, Input } from '@angular/core';
import { AlunoService } from './aluno.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {


  aluno : any = [];

  constructor(private service: AlunoService) {
  

   }

  ngOnInit() {
    this.aluno = this.service.getAluno();
  }
  onSubmitAluno(formulario:NgForm){
    this.service.saveAluno(formulario);

  }
}
