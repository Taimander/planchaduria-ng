import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SelectItem } from 'primeng/api';
import { Client } from 'src/app/models/client.model';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-purchase-registration',
  templateUrl: './purchase-registration.component.html',
  styleUrls: ['./purchase-registration.component.css']
})
export class PurchaseRegistrationComponent {

  step: number = 1;

  products: OrderProduct[] = [
    new OrderProduct('Planchado', 10),
    new OrderProduct('Tintorería', 5),
    new OrderProduct('Zapatería', 3),
    new OrderProduct('Costura', 4),
    new OrderProduct('Lavandería', 2)
  ];

  stateOptions: SelectItem[] = [
    { label: 'Si', value: 1 },
    { label: 'No', value: 0 }
  ];

  userSearchText: string = "";
  userResults: Client[] = [];

  isUserRegistered: number = 1;

  client: Client = new Client();

  total: number = 0;

  clientSelectModalView: boolean = false;

  computeTotal() {
    this.total = 0;
    this.products.forEach(product => {
      this.total += product.product.price * product.quantity;
    });
  }

  clickPlus(product: OrderProduct) {
    product.quantity++;
    this.computeTotal();
  }

  clickMinus(product: OrderProduct) {
    if (product.quantity > 0) {
      product.quantity--;
      this.computeTotal();
    }
  }

}

class OrderProduct {
  product!: Product;
  quantity!: number;
  constructor(name: string, price: number) {
    this.product = new Product();
    this.quantity = 0;
    this.product.name = name;
    this.product.price = price;
  }
}
