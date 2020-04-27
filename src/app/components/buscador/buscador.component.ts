import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',

})
export class BuscadorComponent implements OnInit {

  heroes: any[]= [];
  termino: string ;

  constructor( private activateRoute: ActivatedRoute,
               private _heroresService: HeroesService
    ) { } 

  ngOnInit(): void {

    this.activateRoute.params.subscribe( params =>{
      this.termino = params['termino'];

      this.heroes = this._heroresService.buscarHeroes( params ['termino']);
      console.log(this.heroes);
    })
  }

}
