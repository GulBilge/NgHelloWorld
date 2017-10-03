import { providerDef } from '@angular/compiler/src/view_compiler/provider_compiler';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.css'],
  providers: [HeroService]
})
export class DetailHeroComponent implements OnInit {

  @Input() detailSelectedHero: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) {

  }

  ngOnInit() {

    this.route
      .paramMap
      .switchMap(params => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.detailSelectedHero = hero);

  }
  logHero() {
    console.log(this.detailSelectedHero.name);
  }

  goBack(): void {
    this.location.back();
  }
}
