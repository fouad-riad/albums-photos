import { Component, OnInit } from '@angular/core';
import { AlbumsPhotosService } from '../../services/albums-photos.service';
import { Albums } from '../../moduls/modello';


@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrl: './albums-detail.component.css'
})
export class AlbumsDetailComponent  implements OnInit {

albums!:Albums[]


  constructor(private albumsPhotosService:AlbumsPhotosService) { }

  ngOnInit(): void {
    this.albumsPhotosService.getAlbums().subscribe(dati => this.albums = dati);
  }
}
