import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-red-button',
  standalone: true,
  imports: [],
  templateUrl: './red-button.component.html',
  styleUrl: './red-button.component.scss'
})
export class RedButtonComponent {
  @Input() content: string='Mon text';
  @Input() type: string='orange';
}
