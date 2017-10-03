import { HEROES } from '../dummy/heroes';
import { Hero } from '../models/hero';
import { Injectable } from '@angular/core';


@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(hrs => hrs.find(x => x.id === id));
  }
}
