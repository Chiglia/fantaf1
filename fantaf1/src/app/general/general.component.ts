import { Component, Input } from '@angular/core';
import { General } from '../general';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
  @Input() general!: General;
}
