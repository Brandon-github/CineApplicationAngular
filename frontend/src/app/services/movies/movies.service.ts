import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie, MovieOne } from 'src/app/models/movie/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlApi = "/api/peliculas";

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  getMovie(id: String) {
    return this.http.get(`${this.urlApi}/${id}`);
  }

  addMovie(movie: MovieOne) {
    return this.http.post(`${this.urlApi}/agregar`, movie);
  }

  updateMovie(id:String, movie: MovieOne) {
    return this.http.put(`${this.urlApi}/actualizar/${id}`, movie);
  }

  deleteMovie(id: String) {
    return this.http.delete(`${this.urlApi}/eliminar/${id}`);
  }
}
