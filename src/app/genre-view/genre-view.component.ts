import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-genre-view',
  templateUrl: './genre-view.component.html',
  styleUrls: ['./genre-view.component.scss']
})
export class GenreViewComponent{

 /**
 *
 * @param data
 */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data:{
      Name: string,
      Description: string
    }
  ) { }

  ngOnInit(): void {
  }

}
