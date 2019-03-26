import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';
import { promise } from 'protractor';

const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12.99, image: 'assets/reine.jpg' },
  { id: 2, name: '4 fromages', price: 13.99, image: 'assets/pizza_fresca.jpg' },
  { id: 3, name: 'Orientale', price: 11.99, image: 'assets/reine.jpg' },
  { id: 4, name: 'Cannibale', price: 9.99, image: 'assets/pizza_fresca.jpg' }
];

@Injectable({
  providedIn: 'root'
})

export class PizzaService {

  constructor() { }

  getPizzas(): Promise<Pizza[]>{
    return Promise.resolve(PIZZAS);
  }

  /**
   * Permet de simuler une mauvaise connexion
   */
  // getPizzasSlowly(): Promise<Pizza[]> {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(this.getPizzas()), 2000);
  //   });
  // }
}
