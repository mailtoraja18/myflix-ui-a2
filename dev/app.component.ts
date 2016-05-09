import {Component} from 'angular2/core';
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {MovieSearchComponent} from "./movie-search-component";

@Component({
    selector: 'my-app',
    template: `
      <header>
        <nav>
              <ul>
                    <li class="active"><a [routerLink]="['MovieSearch']">Choose Movies</a></li>
                    <li><a href="#about">Checkout</a></li>
                    <li><a href="#contact">Contact</a></li>
              </ul>
         </nav>               
        </header>
        <div class="main">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/movies/...', name: 'MovieSearch', component: MovieSearchComponent, useAsDefault: true},
])
export class AppComponent {

}