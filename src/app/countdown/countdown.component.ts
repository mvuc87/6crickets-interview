import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { Observable, takeWhile, map, timer } from 'rxjs';
import { RemainingTimeFormatPipe } from './remaining-time-format.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, RemainingTimeFormatPipe],
  selector: 'app-countdown',
  templateUrl: './countdown.component.html'
})
export class CountdownComponent implements OnChanges {
  @Input() timeLeft = 0;
  countdown: Observable<number> | undefined;
  ngOnChanges() {
    this.countdown = timer(0, 1000).pipe(
      map(value => this.timeLeft - value),
      takeWhile(value => value >= 0),
    );
  }
}
