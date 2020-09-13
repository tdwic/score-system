import {Component, OnInit} from '@angular/core';
import {BaseService} from '../../services/base.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {

  user: string;
  editUserObj: any;

  // data: {
  playerName: string;
  playerScore: number;

  // };

  constructor(private baseService: BaseService) {
  }

  ngOnInit(): void {

    this.baseService.cast.subscribe(user => {
      this.user = user;
    });

  }

  // tslint:disable-next-line:typedef
  editUser() {
    //this.baseService.editUser(this.editUserObj);

    localStorage.removeItem('PLAYER_NAME');
    localStorage.removeItem('PLAYER_SCORE');
    localStorage.removeItem('PLAYER_NAME_APPROVED');
    localStorage.removeItem('PLAYER_NAME_APPROVED');

    localStorage.setItem('PLAYER_NAME', this.playerName);
    localStorage.setItem('PLAYER_SCORE', String(this.playerScore));

  }
}
