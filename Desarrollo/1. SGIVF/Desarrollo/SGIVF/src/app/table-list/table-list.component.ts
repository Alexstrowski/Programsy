import { Component, OnInit } from '@angular/core';
import 'hammerjs';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  agregar(){
      const div_agregar = document.querySelector('.agregar');
      div_agregar.className = 'agregar aparecer';
  }
  cancelar(){
      const div_agregar = document.querySelector('.agregar');
      const cancelar = document.querySelector('#cancelar');
      div_agregar.className = 'agregar ';
  }
}
