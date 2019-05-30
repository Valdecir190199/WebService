import { Component } from '@angular/core';
import { Estado } from '../entidades/estado';
import { ServicoEstado } from '../servicos/servico.estado';
import { Observable } from 'rxjs';

@Component({
  selector: 'vetor-component'
  ,templateUrl: 'vetores.component.html'
  ,styleUrls: ['vetores.component.html']
})
export class VetoresComponent{

  estados$ : Observable<Estado[]>;
  estado : Estado = new Estado();
  salvar: boolean = true;

  constructor(private servico: ServicoEstado){
  }

  ngOnInit(){
    this.estados$ = this.servico.listar();
  }

  adicionar() : void {
    if(this.salvar){
      this.servico.adicionar(this.estado).subscribe(()=>{
        this.estados$ = this.servico.listar();
      });

    }else{
      this.servico.alterar(this.estado).subscribe(()=>{
        this.estados$ = this.servico.listar();
      });
      this.salvar = true;
    }

    this.estado = new Estado();


  }

  excluir(id:number) : void {
    this.servico.excluir(id).subscribe(()=>{
      this.estados$ = this.servico.listar();
    });
  }

  alterar(estado: Estado) : void{
    this.estado = estado;
  }
}
