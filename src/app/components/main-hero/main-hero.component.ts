// import { HEROES } from '../../dummy/heroes';
import { Hero } from '../../models/hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-main-hero',
  templateUrl: './main-hero.component.html',
  styleUrls: ['./main-hero.component.css'],
  providers: [HeroService]
})
export class MainHeroComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  onSelectedHero(hero: Hero) {

    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) {

  }

  getHeroes() {
    this.heroService.getHeroes().then(h => this.heroes = h);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
