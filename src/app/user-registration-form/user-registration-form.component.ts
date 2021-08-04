import { Component, OnInit, Input } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

  @Input() userData = {Username: '', Password: '', Email: '', BirthDay: ''}

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  /**
   * Register User Function
   */

  registerUser(): void{
    this.fetchApiData.userRegistration(this.userData).subscribe((response: any) => {
      this.dialogRef.close();
      console.log(response);
      this.snackBar.open('User Registered Successfully', 'OK!',{
        duration: 2000
      });
    },(response: string)=> {
      console.log(response);
      this.snackBar.open(response, 'OK', {
        duration:2000
      })
    })
  }
}
