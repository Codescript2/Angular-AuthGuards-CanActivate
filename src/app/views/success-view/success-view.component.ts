import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-success-view',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './success-view.component.html',
  styleUrl: './success-view.component.scss'
})
export class SuccessViewComponent {

}
