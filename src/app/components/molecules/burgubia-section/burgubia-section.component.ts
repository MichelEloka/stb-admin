import { Component } from '@angular/core';
import { RedButtonComponent } from '../../atoms/buttons/red-button/red-button.component';

@Component({
  selector: 'app-burgubia-section',
  standalone: true,
  imports: [RedButtonComponent],
  templateUrl: './burgubia-section.component.html',
  styleUrl: './burgubia-section.component.scss'
})
export class BurgubiaSectionComponent {

}
