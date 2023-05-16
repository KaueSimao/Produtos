import { produtos } from './../produtos';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: produtos[] = [];

  constructor(private ProdutosService: ProdutosService) { }
  
  ngOnInit(): void {
    this.loadProdutos();
  }
  loadProdutos() {
    this.ProdutosService.getProdutos().subscribe(
      {
        next: data => this.produtos = data
      }
    )
  }
}
