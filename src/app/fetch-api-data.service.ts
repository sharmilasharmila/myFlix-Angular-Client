import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';


// User registration
//Declaring the api url that will provide data for the client app
const apiUrl = 'https://sharmilamovie.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})
// export class UserRegistrationService {
//    constructor(private http: HttpClient) {
//    }
export class FetchApiDataService {
  constructor(private http: HttpClient) {
  }

  /**
   * Register New User
   * @param userDetails
   * @returns
   */
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.userRegistrationHandleError)
    );
  }

  private userRegistrationHandleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }

  /**
   * Login Existing User
   * @param userDetails
   * @returns
   */
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'login', userDetails).pipe(
    catchError(this.userLoginHandleError)
    );
  }

  private userLoginHandleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }

  /**
   * Get All Movies
   * @returns
   */
  public getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractResponseData), catchError(this.getMoviesHandleError));
  }

  private extractResponseData(res: Response | { }): any {
    const body = res;
    return body || { };
  }

  private getMoviesHandleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }

  /**
   * Get Single Movie
   * @returns
   */
  public getOneMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies/:Title', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractOneResponseData), catchError(this.oneMovieHandleError));
  }
  private extractOneResponseData(res: Response | { }): any {
    const body = res;
    return body || { };
  }

  private oneMovieHandleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }

  /**
   * Get movies from a Director
   * @returns
   */
  public getDirectorMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies/directors/:name', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractDirectorResponseData), catchError(this.handleError));
  }
  private extractDirectorResponseData(res: Response | { }): any {
    const body = res;
    return body || { };
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }

  /**
   * Get Single Genre's Movies
   * @returns
   */
  public getGenreMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies/genre', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractGenreResponseData), catchError(this.genreHandleError));
  }
  private extractGenreResponseData(res: Response | { }): any {
    const body = res;
    return body || { };
  }

  private genreHandleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }

  /**
   * Get User Details
   * @param user
   * @returns
   */
  public getUser(user: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'users/${username}', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractUserResponseData), catchError(this.userMovieHandleError));
  }
  private extractUserResponseData(res: Response | { }): any {
    const body = res;
    return body || { };
  }

  private userMovieHandleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }

  /**
   * Get all favorite Movies
   * @returns
   */
  public getFavoriteMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'users/:favourite', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractFavoriteResponseData), catchError(this.favoriteHandleError));
  }
  private extractFavoriteResponseData(res: Response | { }): any {
    const body = res;
    return body || { };
  }

  private favoriteHandleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }

  /**
   * Add a movie to Favorite list
   * @param id
   * @returns
   */
  addFavorite(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return this.http.post(apiUrl + `users/${user}/Movies/${id}`, id, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.addFavoriteHandleError)
    );
  }

  private addFavoriteHandleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Error adding movie to favorites list, please contact the developer.');
  }

  /**
   * Update favorite Movies
   * @returns
   */
  public updateFavoriteMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .put(apiUrl + 'users', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractUpdateFavoriteResponseData), catchError(this.UpdateFavoriteandleError));
  }
  private extractUpdateFavoriteResponseData(res: Response | { }): any {
    const body = res;
    return body || { };
  }

  private UpdateFavoriteandleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }

  /**
   * Edit User Details
   * @param userDetails
   * @returns
   */
  editUser(userDetails: any): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return this.http.put(apiUrl + `users/${user}`, userDetails, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })
    }).pipe(
      map(this.extractEditUserResponseData),
      catchError(this.editUserHandleError)
    );
  }

  // Non-typed response extraction
  private extractEditUserResponseData(res: Response | { }): any {
    const body = res;
    return body || { };
  }

  private editUserHandleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }

  /**
   * Delete a User
   * @returns
   */
  deleteUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return this.http.delete(apiUrl + 'users/:Username', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })
    }).pipe(
      map(this.extractDeleteUserResponseData),
      catchError(this.deleteUserHandleError)
    );
  }

  // Non-typed response extraction
  private extractDeleteUserResponseData(res: Response | { }): any {
    const body = res;
    return body || { };
  }

  private deleteUserHandleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }

  /**
   * Delete favorite Movie
   * @param id
   * @returns
   */
  deleteFavoriteMovie(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return this.http.delete(`${apiUrl}users/${user}/movies/${id}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })
    }).pipe(
      map(this.extractDeleteFavoriteResponseData),
      catchError(this.deleteFavoriteHandleError)
    );
  }

  // Non-typed response extraction
  private extractDeleteFavoriteResponseData(res: Response | { }): any {
    const body = res;
    return body || { };
  }

  private deleteFavoriteHandleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

