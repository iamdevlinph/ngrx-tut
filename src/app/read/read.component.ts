import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Tutorial } from '../ducks/tutorial/model';
import { AppState } from './../app.state';
import { Observable } from 'rxjs';
import * as TutorialActions from '../ducks/tutorial/actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  removeTut(idx: number) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(idx));
  }

  ngOnInit() {
  }

}
