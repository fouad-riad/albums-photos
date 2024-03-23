import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums } from '../moduls/modello';
import { Photos } from '../moduls/modello-photos';

@Injectable({
  providedIn: 'root'
})
export class AlbumsPhotosService {

  constructor(private http:HttpClient) { }

  getAlbums(): Observable<Albums[]>{
    return this.http.get<Albums[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getPhotos(albumId:number): Observable<Photos[]>{
    return this.http.get<Photos[]>('https://jsonplaceholder.typicode.com/photos?albumId='+albumId);
  }
}
