import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Data } from '../../models/Data';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
orderName : string='';
orderTotal : any;

  constructor(private CartService:CartService) { }

  ngOnInit(): void {
    this.orderName=this.CartService.getOrderName()
    this.orderTotal=this.CartService.getOrderTotal()

/*console.log(this.orderName,this.orderTotal)*/
  }

}
