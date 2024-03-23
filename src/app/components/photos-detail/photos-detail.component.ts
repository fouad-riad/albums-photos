import { Component, OnInit } from '@angular/core';
import { Photos } from '../../moduls/modello-photos';
import { AlbumsPhotosService } from '../../services/albums-photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos-detail',
  templateUrl: './photos-detail.component.html',
  styleUrl: './photos-detail.component.css'
})
export class PhotosDetailComponent implements OnInit {
photos?:Photos[]
  constructor(private albumsPhotosService:AlbumsPhotosService ,private route:ActivatedRoute) { }
  ngOnInit(): void {
    const albumId= parseInt(this.route.snapshot.paramMap.get('albumId')!);
    
   this.albumsPhotosService.getPhotos(albumId).subscribe(dati =>this.photos =dati);
   
  }
}
