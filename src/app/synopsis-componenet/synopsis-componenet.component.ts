import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-synopsis-componenet',
  templateUrl: './synopsis-componenet.component.html',
  styleUrls: ['./synopsis-componenet.component.scss']
})
export class SynopsisComponenetComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      synopsis: string;
    }
  ) { }

  ngOnInit(): void {
  }

}
