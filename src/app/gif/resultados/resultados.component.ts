import { Component} from '@angular/core';
import { GifsServicesService } from '../services/gifs-services.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent  {

    get resultados(){
    return this.gifsService.resultados;
    }

    constructor( private gifsService: GifsServicesService) { }


}
