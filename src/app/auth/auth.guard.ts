import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store'; 
import { isLoggedIn } from './auth.selectors';
import { tap } from 'rxjs/operators';
import { AppState } from '../reducers/index';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private store: Store<AppState>, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean>  {

    return this.store
      .pipe(
        select(isLoggedIn),
        tap(loggedIn => {

          if (!loggedIn) {
            this.router.navigateByUrl('/login');
          }
        })
    );
  }
}
