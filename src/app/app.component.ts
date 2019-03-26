import { Component } from '@angular/core';
import { Pizza } from './models/pizza';
import { PizzaService } from './services/pizza.service';

const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12.99, image: 'assets/pizza-1.png' },
  { id: 2, name: '4 fromages', price: 13.99, image: 'assets/pizza_fresca.jpg' },
  { id: 3, name: 'Orientale', price: 11.99, image: 'assets/pizza-1.png' },
  { id: 4, name: 'Cannibale', price: 9.99, image: 'assets/pizza_fresca.jpg' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pizzaparty';
  selectedPizza: Pizza;
  pizzaList = PIZZAS;

  constructor(private pizzaService: PizzaService){ }

  onSelect(pizza: Pizza): void{
    console.log(pizza);
    this.selectedPizza = pizza;
  }
}