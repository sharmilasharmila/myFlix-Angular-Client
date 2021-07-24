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

  public getUserMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
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

  public postFavoriteMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .post(apiUrl + 'users/:favourite', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractPOstFavoriteResponseData), catchError(this.postFavoriteHandleError));
  }
  private extractPOstFavoriteResponseData(res: Response | { }): any {
    const body = res;
    return body || { };
  }

  private postFavoriteHandleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }

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

  editUser(userDetails: any): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return this.http.put(apiUrl + 'users/:Username', userDetails, {headers: new HttpHeaders(
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

// User login
// export class UserLoginService {
//   constructor(private http: HttpClient) {
//   }
//   public userLogin(userDetails: any): Observable<any> {
//     console.log(userDetails);
//     return this.http.post(apiUrl + 'login', userDetails).pipe(
//     catchError(this.handleError)
//     );
//   }

//   private handleError(error: HttpErrorResponse): any {
//       if (error.error instanceof ErrorEvent) {
//       console.error('Some error occurred:', error.error.message);
//       } else {
//       console.error(
//           `Error Status code ${error.status}, ` +
//           `Error body is: ${error.error}`);
//       }
//       return throwError(
//       'Something bad happened; please try again later.');
//     }
// }

// get all movies
// export class GetAllMoviesService {
//   constructor(private http: HttpClient) { }

//   public getAllMovies(): Observable<any> {
//     const token = localStorage.getItem('token');
//     return this.http
//       .get(apiUrl + 'movies', {
//         headers: new HttpHeaders({
//           Authorization: 'Bearer ' + token,
//         })
//       })
//       .pipe(map(this.extractResponseData), catchError(this.handleError));
//   }
//   private extractResponseData(res: Response | { }): any {
//     const body = res;
//     return body || { };
//   }

//   private handleError(error: HttpErrorResponse): any {
//     if (error.error instanceof ErrorEvent) {
//       console.error('An error occurred: ', error.error.message);
//     } else {
//       console.error(
//         `Error status code ${error.status}, ` + `Error body is ${error.error}`
//       );
//     }
//     return throwError('Something bad happened; please try again later');
//   }
// }

// get One movie
// @Injectable({
//   providedIn: 'root'
// })
// export class GetOneMovieService {
//   constructor(private http: HttpClient) { }

//   public getOneMovie(): Observable<any> {
//     const token = localStorage.getItem('token');
//     return this.http
//       .get(apiUrl + 'movies/:Title', {
//         headers: new HttpHeaders({
//           Authorization: 'Bearer ' + token,
//         })
//       })
//       .pipe(map(this.extractResponseData), catchError(this.handleError));
//   }
//   private extractResponseData(res: Response | { }): any {
//     const body = res;
//     return body || { };
//   }

//   private handleError(error: HttpErrorResponse): any {
//     if (error.error instanceof ErrorEvent) {
//       console.error('An error occurred: ', error.error.message);
//     } else {
//       console.error(
//         `Error status code ${error.status}, ` + `Error body is ${error.error}`
//       );
//     }
//     return throwError('Something bad happened; please try again later');
//   }
// }

// get Director
// @Injectable({
//   providedIn: 'root'
// })
// export class GetDirectorService {
//   constructor(private http: HttpClient) { }

//   public getDirectorMovie(): Observable<any> {
//     const token = localStorage.getItem('token');
//     return this.http
//       .get(apiUrl + 'movies/directors/:name', {
//         headers: new HttpHeaders({
//           Authorization: 'Bearer ' + token,
//         })
//       })
//       .pipe(map(this.extractResponseData), catchError(this.handleError));
//   }
//   private extractResponseData(res: Response | { }): any {
//     const body = res;
//     return body || { };
//   }

//   private handleError(error: HttpErrorResponse): any {
//     if (error.error instanceof ErrorEvent) {
//       console.error('An error occurred: ', error.error.message);
//     } else {
//       console.error(
//         `Error status code ${error.status}, ` + `Error body is ${error.error}`
//       );
//     }
//     return throwError('Something bad happened; please try again later');
//   }
// }

// get Genre
// @Injectable({
//   providedIn: 'root'
// })
// export class GetGenreService {
//   constructor(private http: HttpClient) { }

//   public getGenreMovie(): Observable<any> {
//     const token = localStorage.getItem('token');
//     return this.http
//       .get(apiUrl + 'movies/genre', {
//         headers: new HttpHeaders({
//           Authorization: 'Bearer ' + token,
//         })
//       })
//       .pipe(map(this.extractResponseData), catchError(this.genreHandleError));
//   }
//   private extractResponseData(res: Response | { }): any {
//     const body = res;
//     return body || { };
//   }

//   private genreHandleError(error: HttpErrorResponse): any {
//     if (error.error instanceof ErrorEvent) {
//       console.error('An error occurred: ', error.error.message);
//     } else {
//       console.error(
//         `Error status code ${error.status}, ` + `Error body is ${error.error}`
//       );
//     }
//     return throwError('Something bad happened; please try again later');
//   }
// }

// get User
// @Injectable({
//   providedIn: 'root'
// })
// export class GetUserService {
//   constructor(private http: HttpClient) { }

//   public getUserMovie(): Observable<any> {
//     const token = localStorage.getItem('token');
//     const username = localStorage.getItem('user');
//     return this.http
//       .get(apiUrl + 'users/${username}', {
//         headers: new HttpHeaders({
//           Authorization: 'Bearer ' + token,
//         })
//       })
//       .pipe(map(this.extractUserResponseData), catchError(this.userMovieHandleError));
//   }
//   private extractUserResponseData(res: Response | { }): any {
//     const body = res;
//     return body || { };
//   }

//   private userMovieHandleError(error: HttpErrorResponse): any {
//     if (error.error instanceof ErrorEvent) {
//       console.error('An error occurred: ', error.error.message);
//     } else {
//       console.error(
//         `Error status code ${error.status}, ` + `Error body is ${error.error}`
//       );
//     }
//     return throwError('Something bad happened; please try again later');
//   }
// }

// Get Favourite Movies
// @Injectable({
//   providedIn: 'root'
// })
// export class GetFavouriteMovieService {
//   constructor(private http: HttpClient) { }

//   public getFavoriteMovie(): Observable<any> {
//     const token = localStorage.getItem('token');
//     return this.http
//       .get(apiUrl + 'users/:favourite', {
//         headers: new HttpHeaders({
//           Authorization: 'Bearer ' + token,
//         })
//       })
//       .pipe(map(this.extractFavoriteResponseData), catchError(this.favoriteHandleError));
//   }
//   private extractFavoriteResponseData(res: Response | { }): any {
//     const body = res;
//     return body || { };
//   }

//   private favoriteHandleError(error: HttpErrorResponse): any {
//     if (error.error instanceof ErrorEvent) {
//       console.error('An error occurred: ', error.error.message);
//     } else {
//       console.error(
//         `Error status code ${error.status}, ` + `Error body is ${error.error}`
//       );
//     }
//     return throwError('Something bad happened; please try again later');
//   }
// }

// Post Favourite Movies
// @Injectable({
//   providedIn: 'root'
// })
// export class PostFavouriteMovieService {
//   constructor(private http: HttpClient) { }

//   public postFavoriteMovie(): Observable<any> {
//     const token = localStorage.getItem('token');
//     return this.http
//       .post(apiUrl + 'users/:favourite', {
//         headers: new HttpHeaders({
//           Authorization: 'Bearer ' + token,
//         })
//       })
//       .pipe(map(this.extractPOstFavoriteResponseData), catchError(this.postFavoriteHandleError));
//   }
//   private extractPOstFavoriteResponseData(res: Response | { }): any {
//     const body = res;
//     return body || { };
//   }

//   private postFavoriteHandleError(error: HttpErrorResponse): any {
//     if (error.error instanceof ErrorEvent) {
//       console.error('An error occurred: ', error.error.message);
//     } else {
//       console.error(
//         `Error status code ${error.status}, ` + `Error body is ${error.error}`
//       );
//     }
//     return throwError('Something bad happened; please try again later');
//   }
// }

// Update User Details
// @Injectable({
//   providedIn: 'root'
// })
// export class UpdateUserDetailsService {
//   constructor(private http: HttpClient) { }

//   public updateFavoriteMovie(): Observable<any> {
//     const token = localStorage.getItem('token');
//     return this.http
//       .put(apiUrl + 'users', {
//         headers: new HttpHeaders({
//           Authorization: 'Bearer ' + token,
//         })
//       })
//       .pipe(map(this.extractUpdateFavoriteResponseData), catchError(this.UpdateFavoriteandleError));
//   }
//   private extractUpdateFavoriteResponseData(res: Response | { }): any {
//     const body = res;
//     return body || { };
//   }

//   private UpdateFavoriteandleError(error: HttpErrorResponse): any {
//     if (error.error instanceof ErrorEvent) {
//       console.error('An error occurred: ', error.error.message);
//     } else {
//       console.error(
//         `Error status code ${error.status}, ` + `Error body is ${error.error}`
//       );
//     }
//     return throwError('Something bad happened; please try again later');
//   }
// }

// Edit User
// @Injectable({
//   providedIn: 'root',
// })
// export class EditUserService {
//   constructor(private http: HttpClient) { }

// //Making the api call to edit user information
//   editUser(userDetails: any): Observable<any> {
//     const token = localStorage.getItem('token');
//     const username = localStorage.getItem('username');
//     return this.http.put(apiUrl + 'users/:Username', userDetails, {headers: new HttpHeaders(
//       {
//         Authorization: 'Bearer ' + token,
//       })
//     }).pipe(
//       map(this.extractResponseData),
//       catchError(this.handleError)
//     );
//   }

//   // Non-typed response extraction
//   private extractResponseData(res: Response | { }): any {
//     const body = res;
//     return body || { };
//   }

//   private handleError(error: HttpErrorResponse): any {
//     if (error.error instanceof ErrorEvent) {
//     console.error('Some error occurred:', error.error.message);
//     } else {
//     console.error(
//         `Error Status code ${error.status}, ` +
//         `Error body is: ${error.error}`);
//     }
//     return throwError(
//     'Something bad happened; please try again later.');
//   }
// }

//Delete User
// @Injectable({
//   providedIn: 'root',
// })
// export class DeleteUserService {
//   constructor(private http: HttpClient) { }

// //Making the api call to delete user information
//   deleteUser(): Observable<any> {
//     const token = localStorage.getItem('token');
//     const user = localStorage.getItem('user');
//     return this.http.delete(apiUrl + 'users/:Username', {headers: new HttpHeaders(
//       {
//         Authorization: 'Bearer ' + token,
//       })
//     }).pipe(
//       map(this.extractResponseData),
//       catchError(this.handleError)
//     );
//   }

//   // Non-typed response extraction
//   private extractResponseData(res: Response | { }): any {
//     const body = res;
//     return body || { };
//   }

//   private handleError(error: HttpErrorResponse): any {
//     if (error.error instanceof ErrorEvent) {
//     console.error('Some error occurred:', error.error.message);
//     } else {
//     console.error(
//         `Error Status code ${error.status}, ` +
//         `Error body is: ${error.error}`);
//     }
//     return throwError(
//     'Something bad happened; please try again later.');
//   }
// }

//Remove Favorite Movie
// @Injectable({
//   providedIn: 'root',
// })
// export class RemoveFavoriteMovieService {
//   constructor(private http: HttpClient) { }

// //Making the api call to delete movie from user's favorites
//   deleteFavoriteMovie(id: string): Observable<any> {
//     const token = localStorage.getItem('token');
//     const user = localStorage.getItem('user');
//     return this.http.delete(`${apiUrl}users/${user}/movies/${id}`, {headers: new HttpHeaders(
//       {
//         Authorization: 'Bearer ' + token,
//       })
//     }).pipe(
//       map(this.extractResponseData),
//       catchError(this.handleError)
//     );
//   }

//   // Non-typed response extraction
//   private extractResponseData(res: Response | { }): any {
//     const body = res;
//     return body || { };
//   }

//   private handleError(error: HttpErrorResponse): any {
//     if (error.error instanceof ErrorEvent) {
//     console.error('Some error occurred:', error.error.message);
//     } else {
//     console.error(
//         `Error Status code ${error.status}, ` +
//         `Error body is: ${error.error}`);
//     }
//     return throwError(
//     'Something bad happened; please try again later.');
//   }
// }
