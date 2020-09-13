import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private user = new BehaviorSubject<string>('test');

  cast = this.user.asObservable();

  constructor() {
  }

  // tslint:disable-next-line:typedef
  editUser(userDetails) {
    this.user.next(userDetails);
  }

}
