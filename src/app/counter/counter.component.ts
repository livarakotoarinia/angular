import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent{

  @Input() value: number = 0;

  min(){
    if(this.value > 0){
      this.value--;
    }
  }

  add(){
    if (this.value < 12) {
      this.value++;
    }
  }
}
