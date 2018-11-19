import { Component, OnInit,OnDestroy} from '@angular/core';
import 'hammerjs';
import {Medicine, MedicineService} from '../medicine.service';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

    subscription: Subscription;
    medicine:any;

    medicinaLectura:Medicine={
        id:0,
        codigo:"",
        descripcion:"",
        tipo:"",
        fechaVencimiento:"",
        stock:0,
        precioReferencial:0,
        fechaCreacion:"",
        fechaActualizacion:""
    };
    medicinaInsertar:Medicine={
        id:0,
        codigo:"",
        descripcion:"",
        tipo:"",
        fechaVencimiento:"",
        stock:0,
        precioReferencial:0,
        fechaCreacion:"",
        fechaActualizacion:""
    };
    medicinaEnvio:any;
    medicines:Medicine[]=[];
    constructor(private _mecicineService:MedicineService,private router:Router,private location: Location, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.medicines=this._mecicineService.getMedicines();
    
    if (this.subscription) {
        this.subscription.unsubscribe();
      }
      this.subscription = this._mecicineService.getAll().subscribe((medicines )=>{ this.medicines = medicines;
        console.log("Respuesta del sevicio de mecicinas");
        console.log(medicines);
    })
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  agregar(){
      const div_agregar = document.querySelector('.agregar');
      div_agregar.className = 'agregar aparecer';
   
 
  }
  insertar(){


        console.log("Medicamento a ingresar")
        console.log(this.medicinaInsertar);

        this.medicinaEnvio={
            codigo:this.medicinaInsertar.codigo,
            descripcion:this.medicinaInsertar.descripcion,
            tipo:this.medicinaInsertar.tipo,
            fechaVencimiento:this.medicinaInsertar.fechaVencimiento,
            stock:this.medicinaInsertar.stock,
            precioReferencial:this.medicinaInsertar.precioReferencial
        };

        console.log("Medicamento a enviar para insertar");
        console.log(this.medicinaEnvio);


    this._mecicineService.create(this.medicinaEnvio).subscribe(()=>{

        this.cerrarIngreso();alert("Medicamento ingresado con éxito");
    })

  }
 
    cancelar(){
      const div_agregar = document.querySelector('.agregar');
      const cancelar = document.querySelector('#cancelar');
      div_agregar.className = 'agregar ';
    }

    editar(medicine: any) {
        this.medicinaLectura = medicine;
        const div_editar = document.querySelector('.editar');
        div_editar.className = 'editar aparecer';
        console.log(medicine);
    }
    actualizar(){
        console.log("Medicamento-seleccionado")
        console.log(this.medicinaLectura);

        this.medicinaEnvio={
            codigo:this.medicinaLectura.codigo,
            descripcion:this.medicinaLectura.descripcion,
            tipo:this.medicinaLectura.tipo,
            fechaVencimiento:this.medicinaLectura.fechaVencimiento,
            stock:this.medicinaLectura.stock,
            precioReferencial:this.medicinaLectura.precioReferencial
        };

        console.log("Medicamento a enviar para actualizar");
        console.log(this.medicinaEnvio);
        console.log("id enviado");
        console.log(this.medicinaLectura.id);


        this._mecicineService.update(this.medicinaEnvio,this.medicinaLectura.id).subscribe(()=>{
            this.cerrarEdicion();alert("Medicamento actualizado con éxito");
        })
        
      }

    eliminar() {
        console.log("Medicamento a eliminar");
        console.log(this.medicinaLectura.id);
        
        this._mecicineService.delete(this.medicinaLectura.id).subscribe(()=>{this.cerrarEdicion(); alert("Medicamento eliminado con éxito");}
        )
       
    }

    cerrarEdicion() {
        const div_editar = document.querySelector('.editar');
        div_editar.className = 'editar ';
    }

    cerrarIngreso() {
        const div_agregar = document.querySelector('.agregar');
        div_agregar.className = 'agregar';
    }
}
