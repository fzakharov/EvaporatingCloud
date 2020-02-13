import { Component, Input } from '@angular/core';
import { MatInput } from '@angular/material';

@Component({
  selector: 'logical-entity',
  styleUrls: ['./logical-entity.component.css'],
  templateUrl: 'logical-entity.component.html'
})
export class LogicalEntityComponent {
  constructor() {}

  @Input()
  entity: StatementEntity;
}
