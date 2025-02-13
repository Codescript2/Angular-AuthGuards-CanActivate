import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-denied-view',
  imports: [],
  templateUrl: './denied-view.component.html',
  styleUrl: './denied-view.component.scss'
})
export class DeniedViewComponent {
  private _authService = inject(AuthService);

  errorMessage = toSignal(this._authService.errorMessage$);
}
