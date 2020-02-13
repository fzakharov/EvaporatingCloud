export class Entity {
  expression: string;
}

export class StatementEntity extends Entity {}

export class EnterEntity extends Entity {
  to: StatementEntity;
  constructor(to: StatementEntity) {
    super();
    this.to = to;
  }
}

export class LinkEntity extends EnterEntity {
  from: StatementEntity;

  constructor(from: StatementEntity, to: StatementEntity) {
    super(to);
    this.from = from;
  }
}

export class ObjectiveEntity extends StatementEntity {}

export class NeedEntity extends StatementEntity {}

export class WantEntity extends StatementEntity {}

export class EvaporatingCloud extends Entity {
  objective = new ObjectiveEntity();
  bNeed = new NeedEntity();
  cNeed = new NeedEntity();
  dWant = new WantEntity();
  dAltWant = new WantEntity();
  objectiveEnter: EnterEntity;
  bNeedEnter: EnterEntity;
  cNeedEnter: EnterEntity;
  abLink: LinkEntity;
  bdLink: LinkEntity;

  acLink: LinkEntity;
  cdAltLink: LinkEntity;
  ddAltLink: LinkEntity;

  dcLink: LinkEntity;
  dAltbLink: LinkEntity;

  constructor() {
    super();
    this. objectiveEnter = new EnterEntity(this.objective);
    this.bNeedEnter = new EnterEntity(this.bNeed);
    this.cNeedEnter = new EnterEntity(this.cNeed);

    this.abLink = new LinkEntity(this.objective, this.bNeed);
    this.bdLink = new LinkEntity(this.bNeed, this.dWant);

    this.acLink = new LinkEntity(this.objective, this.cNeed);
    this.cdAltLink = new LinkEntity(this.cNeed, this.dAltWant);
    this.ddAltLink = new LinkEntity(this.dWant, this.dAltWant);

    this.dcLink = new LinkEntity(this.dWant, this.cNeed);
    this.dAltbLink = new LinkEntity(this.dAltWant, this.bNeed);

    this.dcLink.expression = this.dAltbLink.expression = 'ставит под угрозу';

    this.objectiveEnter.expression = 'Для того, чтобы';
    this.objective.expression = 'CA: Разрабатывать востребованные продукты приносящие финансовую выгоду компании';
    this.abLink.expression = 'мы должны';
    this.bNeed.expression = 'CB: Выполнять проекты в срок и в рамках бюджета проекта';
    this.acLink.expression = 'мы должны';
    this.cNeed.expression = 'CC: Дорабатывать функциональность по ОС от пользователей';

    this.bNeedEnter.expression = 'Для того, чтобы';
    this.bdLink.expression = 'мы должны';
    this.dWant.expression = 'D: Завершать проект по достижению срока или исчерпанию бюджета';

    this.cNeedEnter.expression = 'Для того, чтобы';
    this.cdAltLink.expression = 'мы должны';
    this.dAltWant.expression = 'D\': Выполнять итерацию по доработкам';

    this.ddAltLink.expression = 'в конфликте с';
  }
}

export abstract class ValidationExpression {
  abstract getExpressionChain(): Entity[];
}

export class ABValidationExpression implements ValidationExpression {
  cloud: EvaporatingCloud;

  constructor(cloud: EvaporatingCloud) {
    this.cloud = cloud;
  }

  getExpressionChain(): Entity[] {
    const list: Entity[] = [
      this.cloud.objectiveEnter,
      this.cloud.objectiveEnter.to,
      this.cloud.abLink,
      this.cloud.abLink.to
    ];

    return list;
  }
}

export class ACValidationExpression implements ValidationExpression {
  cloud: EvaporatingCloud;

  constructor(cloud: EvaporatingCloud) {
    this.cloud = cloud;
  }

  getExpressionChain(): Entity[] {
    const list: Entity[] = [
      this.cloud.objectiveEnter,
      this.cloud.objectiveEnter.to,
      this.cloud.acLink,
      this.cloud.acLink.to
    ];

    return list;
  }
}

export class BDValidationExpression implements ValidationExpression {
  cloud: EvaporatingCloud;

  constructor(cloud: EvaporatingCloud) {
    this.cloud = cloud;
  }

  getExpressionChain(): Entity[] {
    const list: Entity[] = [
      this.cloud.bNeedEnter,
      this.cloud.bNeedEnter.to,
      this.cloud.bdLink,
      this.cloud.bdLink.to
    ];

    return list;
  }
}

export class CDAltValidationExpression implements ValidationExpression {
  cloud: EvaporatingCloud;

  constructor(cloud: EvaporatingCloud) {
    this.cloud = cloud;
  }

  getExpressionChain(): Entity[] {
    const list: Entity[] = [
      this.cloud.cNeedEnter,
      this.cloud.cNeedEnter.to,
      this.cloud.cdAltLink,
      this.cloud.cdAltLink.to
    ];

    return list;
  }
}

export class DDAltValidationExpression implements ValidationExpression {
  cloud: EvaporatingCloud;

  constructor(cloud: EvaporatingCloud) {
    this.cloud = cloud;
  }

  getExpressionChain(): Entity[] {
    const list: Entity[] = [
      this.cloud.ddAltLink.from,
      this.cloud.ddAltLink,
      this.cloud.ddAltLink.to
    ];

    return list;
  }
}

export class DCValidationExpression implements ValidationExpression {
  cloud: EvaporatingCloud;

  constructor(cloud: EvaporatingCloud) {
    this.cloud = cloud;
  }

  getExpressionChain(): Entity[] {
    const list: Entity[] = [
      this.cloud.dcLink.from,
      this.cloud.dcLink,
      this.cloud.dcLink.to
    ];

    return list;
  }
}

export class DAltBValidationExpression implements ValidationExpression {
  cloud: EvaporatingCloud;

  constructor(cloud: EvaporatingCloud) {
    this.cloud = cloud;
  }

  getExpressionChain(): Entity[] {
    const list: Entity[] = [
      this.cloud.dAltbLink.from,
      this.cloud.dAltbLink,
      this.cloud.dAltbLink.to
    ];

    return list;
  }
}
