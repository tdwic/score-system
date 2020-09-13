import {Component, OnInit} from '@angular/core';
import {BaseService} from '../../services/base.service';
import {fromEvent, Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-viewing-component',
  templateUrl: './viewing-component.component.html',
  styleUrls: ['./viewing-component.component.css']
})
export class ViewingComponentComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  user: string;
  source$: Observable<Event>;


  playerName: string;
  playerNameApproved: string;
  playerScore: number;
  playerScoreApproved: number;


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

      const PLAYER_NAME = localStorage.getItem('PLAYER_NAME_APPROVED');
      const PLAYER_SCORE = localStorage.getItem('PLAYER_SCORE_APPROVED');

      if (PLAYER_NAME || PLAYER_SCORE) {

        this.playerName = PLAYER_NAME;
        this.playerScore = Number(PLAYER_SCORE);
      } else {
        console.log('Nothing added yet');
      }
    });

  }

}
