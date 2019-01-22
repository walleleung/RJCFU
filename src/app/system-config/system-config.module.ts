import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,

    RouterModule.forChild([
      {path: '', component: IndexComponent}
    ])
  ]
})
export class SystemConfigModule {
}
