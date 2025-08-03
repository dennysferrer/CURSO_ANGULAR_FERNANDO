import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [],
  templateUrl: './hero-page.component.html',
  //styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {
  name = signal('Ironman')
  age = signal(45)

  heroDescription = computed(() => {
    return `${this.name()} es un héroe de ${this.age()} años`
  })

  capitalizeName = computed(() => {
    return this.name().toUpperCase()
  })

  getHeroDescription(): string {
    return `${this.name()} es un héroe de ${this.age()} años`
  }

  changeHero() {
    this.name.set('Spyderman')
    this.age.set(22)
  }

  resetForm() {
    this.name.set('Ironman')
    this.age.set(45)
  }

  changeAge() {
    this.age.set(60)
  }
}
