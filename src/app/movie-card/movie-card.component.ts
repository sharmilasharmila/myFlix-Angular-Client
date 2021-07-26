import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { GenreViewComponent } from '../genre-view/genre-view.component';
import { DirectorViewComponent } from '../director-view/director-view.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SynopsisComponenetComponent } from '../synopsis-componenet/synopsis-componenet.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = [];
  favoriteMovies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void{
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    })
  }

  openGenre(Name: string, Description: string): void {
    this.dialog.open(GenreViewComponent,{
      data: {Name, Description}
    })
  }

  openDirector(
    Name: string,
    Bio: string,
    Birth: string,
    Death: string
  ): void{
    this.dialog.open(DirectorViewComponent,{
      data: {Name, Bio, Birth, Death}
    })
  }

  openSynopsis(synopsis: string): void{
    this.dialog.open(SynopsisComponenetComponent,{
      data: synopsis
    })
  }

  getFavoriteMovies():void{
    const user = localStorage.getItem('user')
    this.fetchApiData.getUser(user).subscribe((resp: any) => {
      this.favoriteMovies = resp.FavoriteMovies;
    });
  }

  isFavorite(movie: string): boolean {
    return this.favoriteMovies.includes(movie);
  };

  onToggleFavoriteMovie(id: string): any {
    if (this.isFavorite(id)) {
      this.fetchApiData.deleteFavoriteMovie(id).subscribe((resp: any) => {
        this.snackBar.open('Removed from favorites!', 'OK', {
          duration: 2000,
        });
      });
      const index = this.favoriteMovies.indexOf(id);
      return this.favoriteMovies.splice(index, 1);
    } else {
      this.fetchApiData.addFavorite(id).subscribe((response: any) => {
        this.snackBar.open('Added to favorites!', 'OK', {
          duration: 2000,
        });
      });
    }
    return this.favoriteMovies.push(id);
  }

}
