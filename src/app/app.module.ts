import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { EvaporatingCloudComponent } from './evaporating_cloud/evaporating-cloud.component';
import { LogicalEntityComponent } from './evaporating_cloud/logical-entity.component';
import { ValidationExpressionComponent } from './evaporating_cloud/validation-expression.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    LogicalEntityComponent,
    ValidationExpressionComponent,
    EvaporatingCloudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
