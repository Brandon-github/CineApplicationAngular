import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category, CategoryOne } from 'src/app/models/category/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private urlApi = "/api/categorias";

  constructor(private http: HttpClient) { }

  getCategories():Observable<any> {
    return this.http.get<Category>(this.urlApi);
  }

  getCategory(id: String) {
    return this.http.get<Category>(`${this.urlApi}/${id}`);
  }

  addCategory(category: CategoryOne) {
    return this.http.post<CategoryOne>(`${this.urlApi}/agregar`, category);
  }

  updateCategory(id: String, category: CategoryOne) {
    return this.http.put<CategoryOne>(`${this.urlApi}/actualizar/${id}`, category);
  }

  deleteCategory(id: String) {
    return this.http.delete<Category>(`${this.urlApi}/eliminar/${id}`);
  }
}
