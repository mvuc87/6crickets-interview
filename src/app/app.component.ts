import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownComponent } from './countdown/countdown.component';
import { BackendService } from './services/backend.service';
import { TimeLeft } from './models/time-left.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountdownComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  timeLeft: TimeLeft | undefined;
  
  constructor(private backend: BackendService) {}

  ngOnInit() {
    this.backend.getTimeLeft()
      .subscribe(timeLeft => this.timeLeft = timeLeft);
  }
}
