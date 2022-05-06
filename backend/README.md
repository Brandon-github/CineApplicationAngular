## **Backend Application**

## **Tecnologias**

- Nodejs
- Express
- Mysql
- Babel

## Base de datos

- Sql
- Mysql Workbench

## **Rutas**

<br>

### **Peliculas**

<br>

#### **Obtener Todas las peliculas**
```javascript
/api/peliculas GET
```

<br>

#### **Obtener Pelicula por Id**
```javascript
/api/peliculas/:id GET
```
> **params:** 
> - id

<br>

#### **Obtener Pelicula por Nombre**
```javascript
/api/peliculas/nombre/:nombre GET
```
> **params:** 
> - nombre

<br>

#### **Agregar Pelicula**
```javascript
/api/peliculas/agregar POST
```
> **body:** 
> - nombre_pelicula
> - imagen_pelicula
> - duracion_pelicula
> - id_categoria

<br>

#### **Actualizar Pelicula**
```javascript
/api/peliculas/actualizar/:id PUT
```

> **params:**
> - id

> **body:**
> - nombre_pelicula
> - imagen_pelicula
> - duracion_pelicula
> - id_categoria

<br>

#### **Eliminar Pelicula**
```javascript
/api/peliculas/eliminar/:id DELETE
```

> **params:**
> - id



