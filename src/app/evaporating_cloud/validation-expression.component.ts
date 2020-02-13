import { Input, Component } from '@angular/core';

@Component({
  selector: 'validation-expression',
  styleUrls: ['./validation-expression.component.css'],
  templateUrl: 'validation-expression.component.html',
})
export class ValidationExpressionComponent {
  constructor() {}

  @Input()
  validationExpression: ValidationExpression;
}
