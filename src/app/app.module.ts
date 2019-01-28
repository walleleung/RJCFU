import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {MainHostDirective} from './directive/main-host.directive';
import {IndexComponent} from './index/index.component';
import {NgProgressModule} from '@ngx-progressbar/core';
import {NgProgressRouterModule} from '@ngx-progressbar/router';
import {NgProgressHttpModule} from '@ngx-progressbar/http';

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
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,

    NgProgressModule,
    NgProgressRouterModule.withConfig({
      id: 'router-progressbar'
    }),
    NgProgressHttpModule.withConfig({
      id: 'http-progressbar'
    })
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
