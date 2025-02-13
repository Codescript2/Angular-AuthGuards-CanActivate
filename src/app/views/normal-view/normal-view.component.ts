import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-normal-view',
  imports: [],
  templateUrl: './normal-view.component.html',
  styleUrl: './normal-view.component.scss'
})
export class NormalViewComponent {
  private _acRoute = inject(ActivatedRoute);
  
  constructor() {
    this._acRoute.data.subscribe((data) => {
      console.log(data);
    })
  }
}
