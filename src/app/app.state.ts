import { Tutorial } from './ducks/tutorial/model';

export interface AppState {
  readonly tutorial: Tutorial[];
}
