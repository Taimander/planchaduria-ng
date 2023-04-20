import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SelectItem } from 'primeng/api';
import { Client } from 'src/app/models/client.model';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { Service } from 'src/app/models/service.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-purchase-registration',
  templateUrl: './purchase-registration.component.html',
  styleUrls: ['./purchase-registration.component.css']
})
export class PurchaseRegistrationComponent implements OnInit {

  step: number = 0;

  products: OrderService[] = [
    
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

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getServices().subscribe((data: Service[]) => {
      data.forEach(service => {
        this.products.push(new OrderService(service.name, service.price));
      });
    });
  }

  computeTotal() {
    this.total = 0;
    this.products.forEach(product => {
      this.total += product.service.price * product.quantity;
    });
  }

  clickPlus(product: OrderService) {
    product.quantity++;
    this.computeTotal();
  }

  clickMinus(product: OrderService) {
    if (product.quantity > 0) {
      product.quantity--;
      this.computeTotal();
    }
  }

  fmtMoney(value: number) {
    return "$" + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

}

class OrderService {
  service!: Service;
  quantity!: number;
  constructor(name: string, price: number) {
    this.service = new Service();
    this.quantity = 0;
    this.service.name = name;
    this.service.price = price;
  }

}
