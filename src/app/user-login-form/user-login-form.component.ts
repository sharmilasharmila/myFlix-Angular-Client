import { Component, Input, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  @Input() userData = {Username:'', Password:''}

  /**
   *
   * @param fetchApiData
   * @param dialogRef
   * @param snackBar
   * @param router
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * User Login Page
   */
  loginUser(): void{
    this.fetchApiData.userLogin(this.userData).subscribe((response:any)=>{
      this.dialogRef.close();
      localStorage.setItem('user', response.user.Username);
      localStorage.setItem('token', response.token);
      console.log(response);
      this.snackBar.open('User Login Successful','OK!',{
        duration:2000
      });
      this.router.navigate(['movies']);
    }),(response: string)=>{
      console.log(response);
      this.snackBar.open(response,'OK',{
        duration:2000
      })
    }
  }
}
