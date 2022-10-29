import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsServicesService } from '../services/gifs-services.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {

  @ViewChild('txtbuscar') txtbuscar!:ElementRef<HTMLInputElement>;
  constructor(private gifsService:GifsServicesService) {}

  buscar(){
    const valor= this.txtbuscar.nativeElement.value;

    this.gifsService.buscarGifs(valor)

    this.txtbuscar.nativeElement.value='';
  }
}
