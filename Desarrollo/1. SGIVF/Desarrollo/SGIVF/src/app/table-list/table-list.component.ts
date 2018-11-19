import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import {Medicine, MedicineService} from '../medicine.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
    medicina:Medicine={
        id:0,
        name:"",
        laboratory:"",
        code:0,
        type:"",
        date_fin:"",
        stock:0,
        price:0,
        description:""
    };
    medicines:Medicine[]=[];
    constructor(private _mecicineService:MedicineService,private router:Router) { }

  ngOnInit() {
      this.medicines=this._mecicineService.getMedicines();
      console.log(this.medicines);
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

    editar(medicine: any) {
        this.medicina=medicine;
        const div_editar = document.querySelector('.editar');
        div_editar.className = 'editar aparecer';



    }

    eliminar() {
        const div_editar = document.querySelector('.editar');
        div_editar.className = 'editar ';
    }
}
