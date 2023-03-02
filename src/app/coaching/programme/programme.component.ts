import { Component } from '@angular/core';
import { faDumbbell, faPersonRunning, faUsersLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.scss']
})
export class ProgrammeComponent {
  faDumbbell = faDumbbell
  faGroup = faUsersLine
  faRemiseForme = faPersonRunning
}
