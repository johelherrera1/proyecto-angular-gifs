import { Component, OnInit } from '@angular/core';
import { GifsServicesService } from 'src/app/gif/services/gifs-services.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  get historial(){
    return this.gifsService.historial;
  }

  constructor(private gifsService:GifsServicesService) { }

}
