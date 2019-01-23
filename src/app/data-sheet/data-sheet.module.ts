import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NgxDnDModule} from '@swimlane/ngx-dnd';
import {SheetDataComponent} from './sheet-data/sheet-data.component';
import {SheetDesignComponent} from './sheet-design/sheet-design.component';
import {HostDirective} from './host.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, SheetDataComponent, SheetDesignComponent, HostDirective],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NgxDnDModule,
    FormsModule,

    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ])
  ],
  entryComponents: [
    SheetDataComponent,
    SheetDesignComponent
  ]
})
export class DataSheetModule {
}
