import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: IndexComponent},
    {path: 'search', loadChildren: './search/search.module#SearchModule'},
    {path: 'patient', loadChildren: './patient/patient.module#PatientModule'},
    {path: 'followup', loadChildren: './follow-up/follow-up.module#FollowUpModule'},
    {path: 'dataset', loadChildren: './data-set/data-set.module#DataSetModule'},
    {path: 'design', loadChildren: './data-sheet/data-sheet.module#DataSheetModule'},
    {path: 'system', loadChildren: './system-config/system-config.module#SystemConfigModule'},
    {path: 'export', loadChildren: './data-export/data-export.module#DataExportModule'},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
