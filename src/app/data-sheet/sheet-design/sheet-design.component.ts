import {Component, ComponentFactoryResolver, OnInit, TemplateRef, Type, ViewEncapsulation} from '@angular/core';
import {DataSheetService} from '../../service/data-sheet.service';
import {DesignComponentContainer} from '../../model/design-component-container';
import {DesignComponentType} from '../../model/design-component-type.enum';
import {DesignComponentItem} from '../../model/design-component-item';
import {NzDropdownContextComponent, NzDropdownService, NzMenuItemDirective, NzModalService} from 'ng-zorro-antd';
import {TextInputSettingComponent} from '../text-input-setting/text-input-setting.component';
import {SingleSelectSettingComponent} from '../single-select-setting/single-select-setting.component';
import {MultiSelectSettingComponent} from '../multi-select-setting/multi-select-setting.component';
import {TableSettingComponent} from '../table-setting/table-setting.component';
import {DesignComponentBase} from '../../model/design-component-base';
import {PreviewDesignComponent} from '../preview-design/preview-design.component';

@Component({
  selector: 'app-sheet-design',
  templateUrl: './sheet-design.component.html',
  styleUrls: ['./sheet-design.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SheetDesignComponent implements OnInit {
  containerTools: Array<DesignComponentContainer> = [
    {name: '2组件', tooltip: '在同一行中置入两个组件，注意：如果使用过多的布局将难以设计组件，建议大部分情况下一行置入一个组件即可', children: [[], []], type: DesignComponentType.Container},
    {name: '3组件', tooltip: '在同一行中置入三个组件', children: [[], [], []], type: DesignComponentType.Container},
    {name: '4组件', tooltip: '在同一行中置入四个组件', children: [[], [], [], []], type: DesignComponentType.Container},
  ];
  buildTools: Array<DesignComponentItem> = [
    {name: '文本', tooltip: '文本', type: DesignComponentType.TextInput},
    {name: '单选', tooltip: '单选', type: DesignComponentType.SingleSelection},
    {name: '多选', tooltip: '多选', type: DesignComponentType.MultiSelection},
    {name: '表格', tooltip: '表格', type: DesignComponentType.Table}
  ];

  targetBuilderTools: any[] = [];

  private _dropdown: NzDropdownContextComponent;

  constructor(private _sheetService: DataSheetService,
              private _nzDropdownService: NzDropdownService,
              private _componentFactory: ComponentFactoryResolver,
              private _modalService: NzModalService) {
  }

  ngOnInit() {
  }

  quitDesign() {
    this._sheetService.exitDesignMode();
  }

  contextMenu($event: MouseEvent, contextMenuTemplate: TemplateRef<void>) {
    this._dropdown = this._nzDropdownService.create($event, contextMenuTemplate);
  }

  contextMenuClick($event: NzMenuItemDirective) {
    this._dropdown.close();
  }

  editTextModel(model: DesignComponentItem) {
    this.showSettingDlg(TextInputSettingComponent, model);
  }

  editSingleSelect(model: DesignComponentItem) {
    this.showSettingDlg(SingleSelectSettingComponent, model);
  }

  editMultiSelect(model: DesignComponentItem) {
    this.showSettingDlg(MultiSelectSettingComponent, model);
  }

  editTable(model: DesignComponentItem) {
    this.showSettingDlg(TableSettingComponent, model);
  }

  previewSheet() {
    const modalRef = this._modalService.create({
      nzTitle: '预览',
      nzContent: PreviewDesignComponent,
      nzComponentParams: {
        model: this.targetBuilderTools
      },
      nzMaskClosable: false,
      nzWidth: 800,
      nzOnOk: () => {
        modalRef.close();
      },
      nzOnCancel: () => {
        modalRef.close();
      }
    });

    modalRef.afterClose.subscribe(() => {
      modalRef.destroy();
    });
  }

  private showSettingDlg(settingComponent: Type<any>, model: DesignComponentItem) {
    const settingModal = this._modalService.create({
      nzTitle: '编辑文本',
      nzContent: settingComponent,
      nzComponentParams: {
        model: model
      },
      nzMaskClosable: false,
      nzClosable: false,
      nzOnOk: () => new Promise((resolve) => {
          resolve((<DesignComponentBase>settingModal.getContentComponent()).save());
        }
      ),
      nzOnCancel: () => new Promise((resolve) => {
        resolve(true);
      })
    });

    settingModal.afterClose.subscribe(() => {
      settingModal.destroy();
    });
  }
}
