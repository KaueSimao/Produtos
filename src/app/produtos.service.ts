import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<produtos[]>{
    let url = "http://localhost:3000/produtos";
    return this.http.get<produtos[]>(url);
  }
}
