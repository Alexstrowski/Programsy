import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MedicineConfig } from './medicine.config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const httpOptions = {

  headers: new HttpHeaders({
    'Content-type': 'application/json'})
};

@Injectable()
export class MedicineService {

  private resourceUrl: string;

  constructor( private http: HttpClient ) {
    this.resourceUrl = MedicineConfig.httpResource.medicine;
  }


  getAll(): Observable<any[]> {
    return this.http.get<any>(`${this.resourceUrl}`,httpOptions).map(response=> response);
  }

  create(medicamento:any): Observable<any> {
    return this.http.post<any>(`${this.resourceUrl}`,medicamento, httpOptions)
    .map(response =>response);
  }
  update(medicamento: any,id:number): Observable<any> {
    return this.http.put<any>(`${this.resourceUrl}/${id}`, medicamento, httpOptions)
    .map(response => response);
  }
  
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, httpOptions)
    .map(response => response);
  }

 

  private Medicines:any[]=[
      {
        id:1,
        codigo:"M023",
        descripcion:"paracetamol",
        tipo:"pastillas",
        fechaVencimiento:"2019-01-19",
        stock:125,
        precioReferencial:1.2,
        fechaCreacion:"2018-11-12T20:40:23.000+0000",
        fechaActualizacion:"2018-11-12T20:40:23.000+0000"
      },
      {
        id:2,
        codigo:"M030",
        descripcion:"paracetamol",
        tipo:"pastillas",
        fechaVencimiento:"2019-01-19",
        stock:125,
        precioReferencial:1.2,
        fechaCreacion:"2018-11-12T20:40:23.000+0000",
        fechaActualizacion:"2018-11-12T20:40:23.000+0000"
      },
      {
        id:3,
        codigo:"M045",
        descripcion:"paracetamol",
        tipo:"pastillas",
        fechaVencimiento:"2019-01-19",
        stock:125,
        precioReferencial:1.2,
        fechaCreacion:"2018-11-12T20:40:23.000+0000",
        fechaActualizacion:"2018-11-12T20:40:23.000+0000"
      }
  ];
  getMedicines(){
    return this.Medicines;
  }

}
export interface Medicine{
    id:number,
    codigo:string,
    descripcion:string,
    tipo:string,
    fechaVencimiento:string,
    stock:number,
    precioReferencial:number,
    fechaCreacion:string,
    fechaActualizacion:string
}

