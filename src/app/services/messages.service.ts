import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { BehaviorSubject, delay, Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class MessagesResolver implements Resolve<string> {
    private _messageSource = new BehaviorSubject<string>('Esto es un mensaje custom');
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
        return this._messageSource.asObservable();
    }

}

export const messageResolve: ResolveFn<Observable<string>> = () => {
    console.log('MESSAGE FROM RESOLVE');
    const _messageSource$ = new BehaviorSubject<string>('Esto es un mensaje custom');
    return _messageSource$.asObservable()
    // .pipe(delay(3000));
}