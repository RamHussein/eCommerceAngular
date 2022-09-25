import { Data } from './../../models/Data';
import { Component, OnInit , Input,Output,EventEmitter} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() data :any;
  constructor(private CartService:CartService) {
    this.data ={
    id : 0,
    name : '',
    price : 0,
    url : '',
    description:'',
    quantity:1,
    total:0
  }
   }

  ngOnInit(): void {
  }
  addtoCart(): void {


    this.CartService.addCartItems(this.data)
      alert('Added to cart');
    }



}

