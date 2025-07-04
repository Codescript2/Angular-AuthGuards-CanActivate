import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RolesType } from '../interfaces/roles.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthSource$ = new BehaviorSubject<boolean>(false);
  private _errorMessageSource$ = new BehaviorSubject<string>('La ruta no existe');

  isAuth$ = this._isAuthSource$.asObservable();
  errorMessage$ = this._errorMessageSource$.asObservable();

  rol: RolesType = 'Empleado';

  login() {
    this._isAuthSource$.next(true);
  }

  logout() {
    this._isAuthSource$.next(false);
  }

  updateErrorMessage(errorMessage: string) {
    this._errorMessageSource$.next(errorMessage);
  }

}
