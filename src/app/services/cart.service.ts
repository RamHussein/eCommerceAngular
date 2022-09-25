import { Injectable } from '@angular/core';
import { Data } from '../models/Data';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList: Data[]=[];
  total: any;
  name: string='';

  constructor() {


   }

  getCartItems() {
    return this.cartList;
  }

  addCartItems(data:Data){
    let  productIndex =0.9


    for(let i=0;i < this.cartList.length; i++){
      if(this.cartList[i].id == data.id){
        productIndex= i;
        break;
      }else{
        productIndex = 0.9;

      }
    }
    if(productIndex != 0.9){
      this.cartList[productIndex].quantity =data.quantity;
      this.cartList[productIndex].total = data.total;
    }else{
this.cartList.push(data)

  }
}



  totalCartItems(){
     this.total=0;
    for( let x =0; this.cartList.length>x;x++){
    this.total+=this.cartList[x].quantity*this.cartList[x].price;


    }



    return this.total;

  }
sendOrderName(name:string){

this.name=name

}

getOrderName(){


return this.name ;

}

sendOrderTotal(total:any){

  this.total=total;

  }

  getOrderTotal(){


  return this.total ;

  }


}

