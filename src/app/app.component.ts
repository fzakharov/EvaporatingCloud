import { Component } from '@angular/core';
import { Workspace, EvaporatingCloud } from './model/Entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'toc';
  workspace: Workspace = new Workspace();

  addClick() {
    this.workspace.clouds.push(new EvaporatingCloud());
  }
}
