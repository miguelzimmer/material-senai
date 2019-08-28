import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

   
    curso: any = []

  constructor(private service:CursoService) { }

  ngOnInit() {
    this.curso = this.service.getCurso();
    
  }
  onSubmitCurso(formulario: NgForm){
    this.service.saveCurso(formulario);
   }   
}
