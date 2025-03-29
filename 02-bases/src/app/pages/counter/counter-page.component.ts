import {Component, signal, ChangeDetectionStrategy} from '@angular/core';


@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 70px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {
  counter: number = 10;
  counterSignal = signal(10)

  constructor() {
    //setInterval(() => {
      //this.counterSignal.update(value => value + 1)
      //console.log('Tick...')
    //},2000)
  }

  increseBy(value: number): void {
    this.counter += value;
    this.counterSignal.update(current => current + value)
  }

  resetCounter(value: number): void {
    this.counter = 0;
    this.counterSignal.set(0)
  }

}
