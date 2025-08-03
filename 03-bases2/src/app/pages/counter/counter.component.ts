import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter: number = 0;
  counterSignal = signal(0);

  incrementar(){
    this.counter++;
    this.counterSignal.update(value => value + 1);
  }
  decrementar(){
    this.counter--;
    this.counterSignal.update(value => value - 1);
  }
  reset(){
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
