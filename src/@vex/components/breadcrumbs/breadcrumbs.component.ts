import { Component, HostBinding, Input, OnInit } from '@angular/core';
import icHome from '@iconify/icons-ic/twotone-home';
import { trackByValue } from '../../utils/track-by';

@Component({
  selector: 'vex-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() crumbs: string[] = [];

  @Input()
  @HostBinding('class.invert')
  invert: boolean;

  trackByValue = trackByValue;
  icHome = icHome;

  constructor() {
  }

  ngOnInit() {
  }
}
