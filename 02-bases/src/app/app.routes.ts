import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragoballPageComponent } from './pages/dragonball/dragoball-page/dragoball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super-page.component/dragonball-super-page.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterPageComponent
    },
    {
        path: 'hero',
        component: HeroPageComponent
    },
    {
        path: 'dragonball',
        component: DragoballPageComponent
    },
    {
        path: 'dragonball-super',
        component: DragonballSuperPageComponent
    },
    {
        path: '**',
        component: CounterPageComponent
    }
];
