import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Data } from '../../models/Data';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  name: string ='';
totalPrice:any =0;
  cartList:Data[]=[]
address : string ='';
nationalID :string ='';



  constructor(private CartService:CartService) { }

  ngOnInit(): void {
    this.cartList = this.CartService.getCartItems();

this.totalPayment();

  }
  totalPayment() {
    this.totalPrice = this.CartService.totalCartItems();

  }
  clearList(data:Data){
    if (data.quantity==0){
    this.cartList = this.cartList.filter(p=> p.id !==data.id)

    alert('item deleted')
    }

  }



  submitOrder(){

  this.CartService.sendOrderName(this.name)
   console.log(this.name)
  this.CartService.sendOrderTotal(this.totalPrice)
  console.log(this.totalPrice)




  }
}
