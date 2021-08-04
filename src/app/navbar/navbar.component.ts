import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  /**
   *
   * @param router
   */
  constructor(
    private router: Router
  ) { }

  /**
   * Logout Button Function
   */
  logoutUser(): void{
    localStorage.clear();
    this.router.navigate(['welcome']);
  }

  /**
   * User Profile Page
   */
  userProfile(): void{
    this.router.navigate(['user']);
  }

}
