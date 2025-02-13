import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, CanActivateChildFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { ChildData } from "../interfaces/child-data.interface";

@Injectable({
    providedIn: 'root',
})
export class CanActivateChildService implements CanActivateChild {
    authService = inject(AuthService);
    router = inject(Router);

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        console.log({childRoute, state});
        
        const errorMessage = `No puedes acceder a la ruta: "${state.url}" con el rol: ${this.authService.rol}`;

        const data = childRoute.data as ChildData;
        const hasPermission = data.roles.some((rol) => rol === this.authService.rol);
        if(!hasPermission) {
            this.authService.updateErrorMessage(errorMessage);
            return this.router.createUrlTree(['denied-view']);
        }

        return hasPermission;
    }
}

export const canActiveChildFn: CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return true;
}