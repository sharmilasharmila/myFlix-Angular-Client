import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-profile-update',
  templateUrl: './user-profile-update.component.html',
  styleUrls: ['./user-profile-update.component.scss']
})
export class UserProfileUpdateComponent implements OnInit{

  @Input() userData = {Username: '', Password: '', Email: '', BirthDay: ''}

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserProfileUpdateComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  /**
   * Edit User Funstion
   */
  editUser(): void {
    this.fetchApiData.editUser(this.userData).subscribe((response) => {
      this.dialogRef.close();
      localStorage.setItem('user', response.Username);
      this.snackBar.open('Profile updated successfully!', 'OK', {
        duration: 2000
      });
    }, (response) => {
      console.log(response);
      this.snackBar.open(response, 'OK', {
        duration: 2000
      });
    });
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  }

}
