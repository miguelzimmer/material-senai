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
    this.curso = this.service.getCurso(this.curso.id);
    
    
  }
  onSubmitCurso(formulario: NgForm){
    if(formulario.valid){
    this.service.saveCurso(formulario);
    this.curso.id = Math.random().toString(36).substring(2,15)
    + Math.random().toString(36).substring(2,15);
    console.log(this.curso.id);
    
    }
   }   
}
