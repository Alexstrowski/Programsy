import { Injectable } from '@angular/core';

@Injectable()
export class MedicineService {

  private Medicines:any[]=[
      {
        id:1,
        name:"paracetamol",
          laboratory:"vick",
          code:1520,
          type:"pastilla",
          date_fin:"21/01/2019",
          stock:452,
          price:5.20,
          description:"pastilla para el dolor de cabeza"
      },
      {
        id:2,
          name:"paracetamol2",
          laboratory:"vick2",
          code:1520,
          type:"pastilla2",
          date_fin:"21/01/2019",
          stock:452,
          price:2.20,
          description:"pastilla para el dolor de cabeza"
      }
  ];

  constructor() { }


  getMedicines(){
    return this.Medicines;
  }

}
export interface Medicine{
    id:number;
    name:string,
    laboratory:string,
    code:number,
    type:string,
    date_fin:string,
    stock:number,
    price:number,
    description:string
}