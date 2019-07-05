import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Fields } from 'src/app/models/fields.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  fieldsSettings$: Observable<{}>;
  fieldsSettings: Array<Fields>;
  errorMessage: ErrorMessage;
  rippleEffectsColor: string;
  routerNavigation: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
    this.routerNavigation = _.last(_.split(this.router.url, '/'));
  }
}
