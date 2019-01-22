import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {LoginComponent} from './login/login.component';
import {MainHostDirective} from './directive/main-host.directive';
import { IndexComponent } from './index/index.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainHostDirective,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    NgxChartsModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN}
  ],
  entryComponents: [
    HomeComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
