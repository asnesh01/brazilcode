import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ca-logo-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ca-logo-2.component.html',
})
export class CaLogo2Component {
  @Input() public width: string = '80%';
}
