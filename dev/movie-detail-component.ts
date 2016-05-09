import {Component,Input} from "angular2/core";
import {Movie} from "./Movie";


@Component({
    selector:'movie-detail',
    templateUrl: '../templates/movies/movie-detail.tpl.html'
})
export class MovieDetailComponent {
    @Input() item: Movie;
}
