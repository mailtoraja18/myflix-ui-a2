/**
 * Created by user on 5/7/2016.
 */

export class Movie {
    Actors: string;
    Awards: string;
    Country: string;
    Director: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Plot: string;
    Poster: string;
    Rated: string;
    Released: string;
    Response: string;
    Runtime: string;
    Title: string;
    Type: string;
    Writer: string;
    Year: string;
    imdbID: string;
    imdbRating: string;
    imdbVotes: string;

    constructor(obj) {
        for (var prop in obj) this[prop] = obj[prop];
    }
}