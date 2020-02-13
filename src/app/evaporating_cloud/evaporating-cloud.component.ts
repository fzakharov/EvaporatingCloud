import { Component, OnInit, OnChanges, Output } from '@angular/core';
import {
  EvaporatingCloud,
  ABValidationExpression,
  ACValidationExpression,
  BDValidationExpression,
  CDAltValidationExpression,
  DDAltValidationExpression,
  DCValidationExpression,
  DAltBValidationExpression
} from '../model/Entity';

@Component({
  selector: 'evaporating-cloud',
  styleUrls: ['./evaporating-cloud.component.css'],
  templateUrl: 'evaporating-cloud.component.html',
})
export class EvaporatingCloudComponent {

  @Output()
  cloud: EvaporatingCloud;
  prefixExpression = 'Для того чтобы';
  abExp: ABValidationExpression;
  acExp: ACValidationExpression;
  bdExp: BDValidationExpression;
  cdAltExp: CDAltValidationExpression;
  ddAltExp: DDAltValidationExpression;

  dcExp: DCValidationExpression;
  dAltbExp: DAltBValidationExpression;

  constructor() {
    this.cloud = new EvaporatingCloud();
    this.abExp = new ABValidationExpression(this.cloud);
    this.acExp = new ACValidationExpression(this.cloud);
    this.bdExp = new BDValidationExpression(this.cloud);
    this.cdAltExp = new CDAltValidationExpression(this.cloud);
    this.ddAltExp = new DDAltValidationExpression(this.cloud);

    this.dcExp = new DCValidationExpression(this.cloud);
    this.dAltbExp = new DAltBValidationExpression(this.cloud);
  }
}
