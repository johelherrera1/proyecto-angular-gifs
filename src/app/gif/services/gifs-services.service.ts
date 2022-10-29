import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsServicesService {
  
  private apiKey : string ='hb8USPQHvfoVuPeCaAOEuU2T3F9MplRu'
  private _historial: string[] = [];

  public  resultados: Gif[] = [];


  get historial(){
    return[...this._historial];
  }

  constructor( private hhtp: HttpClient ){}

  buscarGifs(query:string = ''){ 

    query = query.trim().toLocaleLowerCase();
    
    if( !this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this.historial.splice(0,10);

    }



    this.hhtp.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=hb8USPQHvfoVuPeCaAOEuU2T3F9MplRu&q=${query}&limit=21`)
    .subscribe( (resp ) => {
      console.log( resp.data );
      this.resultados = resp.data;
    })


  }

}
