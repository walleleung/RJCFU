import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,

    RouterModule.forChild([
      {path: '', component: HomeComponent},
    ])
  ]
})
export class SearchModule {
}
