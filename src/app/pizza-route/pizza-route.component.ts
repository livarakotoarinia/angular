import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-route',
  templateUrl: './pizza-route.component.html',
  styleUrls: ['./pizza-route.component.scss']
})
export class PizzaRouteComponent implements OnInit {
  selectedPizza: Pizza;
  pizzaList: Pizza[];

  constructor(private pizzaService: PizzaService){ }
  
  ngOnInit(){
    //   var self = this;
    //  this.pizzaService.getPizzas().then(function(pizzas){
    //    self.pizzaList = pizzas;
    //  });
  
     this.pizzaService.getPizzas().then(pizzas => this.pizzaList = pizzas);
    }
  
    onSelect(pizza: Pizza): void{
      console.log(pizza);
      this.selectedPizza = pizza;
    }

}
