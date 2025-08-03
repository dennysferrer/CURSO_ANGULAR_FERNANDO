import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-drangoball-page',
  imports: [],
  templateUrl: './drangoball-page.component.html',
  styleUrl: './drangoball-page.component.css'
})
export class DrangoballPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8500},
    {id: 3, name: 'Gohan', power: 8000},
    {id: 4, name: 'Piccolo', power: 7000},
    {id: 5, name: 'Yamcha', power: 500}
  ])

  addCharacter(){
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };
    this.characters.update(current => [...current, newCharacter]);
    this.name.set('');
    this.power.set(0);
  }
}
