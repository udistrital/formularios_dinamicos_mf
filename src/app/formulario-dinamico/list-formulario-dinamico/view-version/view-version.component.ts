import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-version',
  templateUrl: './view-version.component.html',
  styleUrl: './view-version.component.scss'
})
export class ViewVersionComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {
    console.log(this.data)
  }
}
