import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import fr from "@angular/common/locales/fr";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { IconDefinition } from "@ant-design/icons-angular";
import * as AllIcons from "@ant-design/icons-angular/icons";

import { fr_FR, NZ_I18N } from "ng-zorro-antd/i18n";
import { NzIconModule } from "ng-zorro-antd/icon";

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgZorroModule } from "src/app/ng-zorro/ng-zorro.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BlankComponent } from "./layouts/blank/blank.component";
import { FullComponent } from "./layouts/full/full.component";

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map((key) => antDesignIcons[key]);

registerLocaleData(fr);

@NgModule({
  declarations: [AppComponent, BlankComponent, FullComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule.forRoot(icons),
    NgZorroModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent],
})
export class AppModule {}
