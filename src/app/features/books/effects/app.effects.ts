import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { applicationStarted } from '../../../actions/app.actions';
import { map } from 'rxjs/operators';
import { loadBookData } from '../actions/list.actions';


@Injectable()
export class AppEffects {

  loadBookData$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(applicationStarted),
        map(() => loadBookData())
      )
  );

  constructor(private actions$: Actions) { }
}
