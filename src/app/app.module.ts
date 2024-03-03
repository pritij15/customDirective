import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicCssDirective } from './shared/directives/basicCss.directive';
import { AdvanceCssDirective } from './shared/directives/advanceCss.directive';
import { ToLowerCaseDirective } from './shared/directives/to-lower-case.directive';
import { CreditCardDirective } from './shared/directives/credit-card.directive';
import { DropdownToggleDirective } from './shared/directives/dropdown-toggle.directive';


@NgModule({
  declarations: [
    AppComponent,
    BasicCssDirective,
    AdvanceCssDirective,
    ToLowerCaseDirective,
    CreditCardDirective,
    DropdownToggleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
