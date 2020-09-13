import {Component, OnInit} from '@angular/core';
import {BaseService} from '../../services/base.service';
import {fromEvent, Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-approving-component',
  templateUrl: './approving-component.component.html',
  styleUrls: ['./approving-component.component.css']
})
export class ApprovingComponentComponent implements OnInit {

  user: string;
  source$: Observable<Event>;


  playerName: string;
  playerScore: number;


  constructor(private baseService: BaseService) {
  }

  ngOnInit(): void {

    this.baseService.cast.subscribe(user => {
      this.user = user;
    });

    this.init();

  }

  // tslint:disable-next-line:typedef
  init() {
    this.source$ = fromEvent(window, 'storage');
    this.source$.pipe(delay(100)).subscribe(idata => {

      const PLAYER_NAME = localStorage.getItem('PLAYER_NAME');
      const PLAYER_SCORE = localStorage.getItem('PLAYER_SCORE');

      if (PLAYER_NAME || PLAYER_SCORE) {
        this.playerName = PLAYER_NAME;
        this.playerScore = Number(PLAYER_SCORE);
      } else {
        console.log('Nothing added yet');
      }
    });

  }

  // tslint:disable-next-line:typedef
  publishMarks() {
    localStorage.setItem('PLAYER_NAME_APPROVED', this.playerName);
    localStorage.setItem('PLAYER_SCORE_APPROVED', String(this.playerScore));
  }
}
