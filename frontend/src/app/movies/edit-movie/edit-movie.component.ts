import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category/category';

import { MovieOne } from 'src/app/models/movie';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { MoviesService } from 'src/app/services/movies/movies.service';


@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  movie: MovieOne = {
    nombre_pelicula: '',
    imagen_pelicula: '',
    duracion_pelicula: '',
    id_categoria: ''
  }

  params = this.activeRouter.snapshot.params;

  categories: Category[] = [];

  constructor(private movieService: MoviesService, private categoryService: CategoriesService, private activeRouter: ActivatedRoute) {
    this.getCategories();
  }

  ngOnInit(): void {
    this.params = this.activeRouter.snapshot.params;

    if (this.params['id']) {
      this.movieService.getMovie(this.params['id']).subscribe(res => {
        console.log(res);
      }, err => {
        console.error(err);
      })
    }

  }

  getCategories() {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
    }, err => {
      console.error(err);
    })
  }

  updateMovie() {
    console.log(this.movie);

    this.movieService.updateMovie(this.params['id'], this.movie).subscribe(res => {
      console.log(res);
    }, err => {
      console.error(err);
    })

  }

}
