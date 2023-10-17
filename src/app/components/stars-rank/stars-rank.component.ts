import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars-rank',
  templateUrl: './stars-rank.component.html',
  styleUrls: ['./stars-rank.component.css']
})
export class StarsRankComponent {

  @Input() rank: number = 0;
  @Input() range: number = 5;
  @Input() reviews: number = 0;
  @Input() show: boolean = false;


}
