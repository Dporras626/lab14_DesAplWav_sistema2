import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import {PeliculaService} from 'src/app/services/pelicula.service';
import Swal from 'sweetalert2'

//Libreria para crear el pdf
import * as pdfMake from  'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.component.html',
  styleUrls: ['./listar-peliculas.component.css']
})
export class ListarPeliculasComponent implements OnInit{
  
  listPeliculas: Pelicula[] = [];
  elementos: number = 0;
  
  constructor(private _peliculaService: PeliculaService) {

  }
  
  ngOnInit(): void {
    
    this.obtenerPeliculas();

  }

  openPdfTables() {
    const documentDefinition: any = {
      content: [
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],
            body: [
              [{ text: 'Titulo', bold: true }, { text: 'Director', bold: true }, { text: 'Clasificacion', bold: true }, {text: 'Protagonista', bold: true},{ text: 'Genero', bold: true },],
              ...this.listPeliculas.map(pelicula => [pelicula.titulo, pelicula.director, pelicula.clasificacion, pelicula.protagonista, pelicula])
            ]
          }
        }
      ]
    };
    pdfMake.createPdf(documentDefinition).open();
  }
  

  obtenerPeliculas(){
    this._peliculaService.getPeliculas().subscribe(data => {
      console.log(data);
      this.listPeliculas = data;
      this.elementos = this.listPeliculas.length;
      
    });
  }

  eliminarPelicula(id: any){
      Swal.fire({
        title: 'Eliminacion de Pelicula',
        text: "¿Desea eliminar pelicula?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this._peliculaService.deletePeliculas(id).subscribe(data => {
          console.log(data);
          this.obtenerPeliculas();
          this.elementos = this.listPeliculas.length;
        });
      }
    });
  }

}
