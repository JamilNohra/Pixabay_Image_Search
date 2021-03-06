import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/images.service';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: any[] = [];
  searchQuery: string = "";
  imgFound: boolean = false;
  searching: boolean = false;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  handleSuccess(data: any) {
    this.imgFound = true;
    this.images = [];
    data.forEach((element: any[]) => {
      return this.images.push(element)
    });
    console.log(data);
    console.log(this.images);
  }

  handleError(error: any) {
    console.log(error);
  }

  searchImages(query: string) {
    this.searching = true;
    return this.imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false);

  }
}
