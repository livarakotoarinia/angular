import { Component } from '@angular/core';

export class Pizza{
  id: number;
  name: string;
  price: number;
}

const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12.99 },
  { id: 2, name: '4 fromages', price: 13.99 },
  { id: 3, name: 'Orientale', price: 11.99 },
  { id: 4, name: 'Cannibale', price: 9.99 }
];

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1>{{ title }} : {{ name }} : </h1>
    <h2>{{ pizza.name }}</h2>
    <div>
      <label>Nom:</label>
      <input [(ngModel)]="pizza.name">
      <label>Prix:</label> {{ pizza.price }}
    </div>
    <div class="container">
      <div class="row">
        <div class="col-3" *ngFor="let pizza of pizzaList">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">{{ pizza.name }}</h5>
              <p class="card-text">Prix: {{ pizza.price }} &euro;</p>
            </div>
          </div>
        </div>
      </div>      
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pizzaparty';
  name = '4 fromages';
  pizza: Pizza = {
    id: 1,
    name: 'Reine',
    price: 12.99
  };
  pizzaList = PIZZAS;
}
