import { UpperCasePipe } from '@angular/common'
import { Component, computed, signal } from '@angular/core'


@Component({
  selector: 'app-hero',
  templateUrl: './hero-page.component.html',
  //imports: [ UpperCasePipe ]
  //styleUrls: ['./hero-page.component.scss']
})

export class HeroPageComponent {
  name = signal('Ironman')
  age = signal(45)

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`
    return description
  })

  capitalizeName = computed(() => {
    return this.name().toUpperCase()
  })

  changeHero() {
    this.name.set('Spiderman')

  }

  changeAge() {
    this.age.set(60)
  }

  resetForm() {
    this.name.set('Ironman')
    this.age.set(45)
  }
}
