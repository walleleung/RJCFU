import {Component, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import {DataSheetService} from '../../service/data-sheet.service';
import {DesignComponentContainer} from '../../model/design-component-container';
import {DesignComponentType} from '../../model/design-component-type.enum';
import {DesignComponentItem} from '../../model/design-component-item';
import {NzDropdownContextComponent, NzDropdownService, NzMenuItemDirective} from 'ng-zorro-antd';

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
              private _nzDropdownService: NzDropdownService) {
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
}
