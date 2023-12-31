import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/users/login/login.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { EditarProductosComponent } from './pages/productos/editar-productos/editar-productos.component';
import { TiendasComponent } from './pages/tiendas/tiendas.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CrearTiendasComponent } from './pages/tiendas/crear-tiendas/crear-tiendas.component';
import { EditarTiendasComponent } from './pages/tiendas/editar-tiendas/editar-tiendas.component';
import { ListarPeliculasComponent } from './pages/pelicula/listar-peliculas/listar-peliculas.component';
import { CrearPeliculasComponent } from './pages/pelicula/crear-peliculas/crear-peliculas.component';
import { EditarPeliculasComponent } from './pages/pelicula/editar-peliculas/editar-peliculas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    ListarProductosComponent,
    CrearProductosComponent,
    NavbarComponent,
    EditarProductosComponent,
    TiendasComponent,
    CrearTiendasComponent,
    EditarTiendasComponent,
    ListarPeliculasComponent,
    CrearPeliculasComponent,
    EditarPeliculasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
