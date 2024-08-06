import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedButtonComponent } from '../buttons/red-button/red-button.component';


@Component({
  selector: 'app-line-items',
  standalone: true,
  imports: [CommonModule,RedButtonComponent],
  templateUrl: './line-items.component.html',
  styleUrl: './line-items.component.scss'
})
export class LineItemsComponent {
  @Input() lines = new Array(5); 
  activeIndex = 0;
  @Input() buttons=true;
  @Input() color: string='black';


  public changeColor(direction: string): void {
    if (direction === 'left') {
      this.activeIndex = (this.activeIndex - 1 + this.lines.length) % this.lines.length;
      console.log(this.activeIndex);
    } else if (direction === 'right') {
      this.activeIndex = (this.activeIndex + 1) % this.lines.length;
      console.log(this.activeIndex);

    }
  }

}
