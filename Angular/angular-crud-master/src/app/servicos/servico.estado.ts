import { Estado } from '../entidades/estado';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';

@Injectable()
export class ServicoEstado {
  private readonly URL = 'http://localhost:8080/ws/estado/';
  listaEstados = new Array<Estado>();

  estado: Estado = new Estado();

  constructor(private http: HttpClient){}

  adicionar(estado: Estado) {
    return this.http.post(this.URL, estado).pipe(take(1));
  }

  excluir(id: number) {
    return this.http.delete(this.URL+id).pipe(take(1));
  }

  alterar(estado: Estado) {
    return this.http.put(this.URL, estado).pipe(take(1));
  }

  listar(){
    return this.http.get<Estado[]>(this.URL).pipe(take(1));
  }
}
