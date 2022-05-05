import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category/category';
import { Router } from '@angular/router';

import { CategoriesService } from 'src/app/services/categories/categories.service';
import { MoviesService } from 'src/app/services/movies/movies.service';

import Movie, { MovieOne } from '../../models/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movie: MovieOne = {
    nombre_pelicula: '',
    imagen_pelicula: '',
    duracion_pelicula: '',
    id_categoria: ''
  }

  categories: Category[] = [];

  constructor(private movieService: MoviesService, private categoryService: CategoriesService, private router: Router) {
    this.getCategories();
  }

  ngOnInit(): void {
  }

  addMovie() {
    this.movieService.addMovie(this.movie).subscribe(res => {
      console.log(res)
      this.router.navigate(['/movies']);
    })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
    }, err => {
      console.error(err);
    })
  }

}
