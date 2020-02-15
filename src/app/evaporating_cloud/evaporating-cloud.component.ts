import { Component, OnInit, OnChanges, Output } from "@angular/core";
import {
  EvaporatingCloud,
  ABValidationExpression,
  ACValidationExpression,
  BDValidationExpression,
  CDAltValidationExpression,
  DDAltValidationExpression,
  DCValidationExpression,
  DAltBValidationExpression
} from "../model/Entity";

@Component({
  selector: "evaporating-cloud",
  styleUrls: ["evaporating-cloud.component.css"],
  templateUrl: "evaporating-cloud.component.html"
})
export class EvaporatingCloudComponent {
  @Output()
  cloud: EvaporatingCloud;
  prefixExpression = "Для того чтобы";
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

  onSaveJson() {
    let dataStr = JSON.stringify(this.cloud, null, 2);
    let dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    let exportFileDefaultName = "data.json";

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  }

  openFile(event) {
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
        let reader = new FileReader();
        reader.onload = () => {
            // this 'text' is the content of the file
            var text = reader.result;

            this.cloud = JSON.parse(text.toString());
        }
        reader.readAsText(input.files[index]);
    };
}
}
