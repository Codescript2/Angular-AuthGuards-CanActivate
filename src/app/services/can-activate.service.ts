import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { delay, map, of } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class CanActivateService implements CanActivate  {
    authService = inject(AuthService);
    router = inject(Router);

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        console.log({route, state});
        const errorMessage = `No puedes acceder a la ruta: "${state.url}" si no inicias sesión`;
        
        return this.authService.isAuth$.pipe(
            delay(500),
            map((isAuth) => {
                if(!isAuth) {
                    this.authService.updateErrorMessage(errorMessage);
                    return this.router.createUrlTree(['denied-view']);
                }
                return isAuth;
            })
        )
    
    }

}

export const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const errorMessage = `No puedes acceder a la ruta: "${state.url}" si no inicias sesión`;
        
    return authService.isAuth$.pipe(
        delay(500),
        map((isAuth) => {
            if(!isAuth) {
                authService.updateErrorMessage(errorMessage);
                return router.createUrlTree(['denied-view']);
            }
            return isAuth;
        })
    )
}
