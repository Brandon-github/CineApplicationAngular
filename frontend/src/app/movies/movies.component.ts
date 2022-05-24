import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies/movies.service';
import { Route } from '@angular/router';

import { Movie } from 'src/app/models/movie/movie';
import { CategoriesService } from '../services/categories/categories.service';
import { Category, CategoryOne } from 'src/app/models/category/category';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies: Movie[] = [];
  public categories: Category = {id_categoria: 0, nombre_categoria: ""};


  constructor(private movieService: MoviesService, private categoryService: CategoriesService) {

  }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    this.movieService.getMovies().subscribe(res => {
      console.log(res);
      this.movies = res;
    }, err => {
      console.error(err);
    }) ;
  }

  getMovieCategory(id: String) {
    this.categoryService.getCategory(id).subscribe(res => {
      this.categories = res;
    }, err => console.error(err));
  }

  deleteMovie(id: String) {
    this.movieService.deleteMovie(id).subscribe(res => {
      console.log(res);
      this.getAllMovies();
    }, err => console.error(err));
  }

}
