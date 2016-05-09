/**
 * Created by user on 5/6/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {Movie} from "./Movie";
import {MovieSearchService} from "./movie-search-service";
import {ControlGroup, FormBuilder, Validators} from "angular2/common";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {MovieDetailComponent} from "./movie-detail-component";

@Component({
    selector:'movie-search',
    template: `
     <div class="search">
            <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                <input  ngControl="searchText" type="text" id="search" placeholder="Search Movies by Title or Actor" required>
                <button class="btn" type="submit">Go</button>
           </form>
     </div>  
      <div class="master list">
            <ul>
                <li *ngFor="#item of movieList" (click)="onSelectItem(item)"> 
                  <div class="img">
                    <img [src]="item.Poster"> 
                  </div>
                  <div class="text">
                       <span class="emphasis">Movie Title </span> <br> {{item.Title}} <br>
                       <span class="emphasis">Year </span> <br>  {{item.Year}}
                       <i class="fa fa-ticket" aria-hidden="true"></i>
                  </div>                   
                 </li>
            </ul>
      </div>
      <div class="detail">
            <movie-detail *ngIf="selectedItem" [item]="selectedItem"></movie-detail>
      </div>
    `,
    providers:[MovieSearchService],
    directives: [ ROUTER_DIRECTIVES,MovieDetailComponent]
})
@RouteConfig([
    {path: '/', name: 'MovieDetail', component: MovieDetailComponent, useAsDefault: true}
])
export class MovieSearchComponent implements OnInit {
    movieList: Movie[];
    selectedItem : Movie;

    constructor(private _searchService: MovieSearchService,private _formBuilder:FormBuilder,private _router : Router) {}

    onSelectItem(item:Movie) {
        this.selectedItem = item;
        this._router.navigate(['MovieDetail', {imdbID:this.selectedItem['imdbID']}]);
    }

    onSubmit(form) {
        this.movieList = this._searchService.searchByTitleOrActor(form.value.searchText);
    }

    ngOnInit():any {

    }
}