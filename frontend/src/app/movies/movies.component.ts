import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies/movies.service';
import { Route } from '@angular/router';

import Movie from '../models/movie';
import { CategoriesService } from '../services/categories/categories.service';
import { Category } from '../models/category/category';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies: Movie[] = [];
  public categories: Category[] = [];

  constructor(private movieService: MoviesService, private categoryService: CategoriesService) {
    this.getAllMovies();
  }

  ngOnInit(): void {
  }

  getAllMovies() {
    this.movieService.getMovies().subscribe(res => {
      console.log(res);
      this.movies = res;
    }, err => {
      console.error(err);
    }) ;
  }

  getMovieCategory() {
    this.categoryService.getCategory("1").subscribe(res => {
      console.log(res);
    }, err => console.error(err))
  }

  deleteMovie(id: String) {
    this.movieService.deleteMovie(id).subscribe(res => {
      console.log(res);
      this.getAllMovies();
    }, err => console.error(err));
  }

}
