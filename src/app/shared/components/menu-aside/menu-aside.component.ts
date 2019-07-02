import { Component, OnInit, Input } from '@angular/core';
import { MenuConfiguration } from '../../models/menu-configuration';

@Component({
  selector: 'app-menu-aside',
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.scss'],
})
export class MenuAsideComponent implements OnInit {
  @Input() menuSettings;
  rippleEffectsColor: string;

  constructor() {}

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
  }
}
