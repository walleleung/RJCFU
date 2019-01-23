import {Component, OnInit} from '@angular/core';
import {DataSheetService} from '../../service/data-sheet.service';
import {DesignComponentContainer} from '../../model/design-component-container';
import {DesignComponentType} from '../../model/design-component-type.enum';
import {DesignComponentItem} from '../../model/design-component-item';

@Component({
  selector: 'app-sheet-design',
  templateUrl: './sheet-design.component.html',
  styleUrls: ['./sheet-design.component.scss']
})
export class SheetDesignComponent implements OnInit {
  containerTools: Array<DesignComponentContainer> = [
    {name: '容器（一个）', cellsCount: 1, children: [] as any [], type: DesignComponentType.Container},
    {name: '容器（两个）', cellsCount: 2, children: [], type: DesignComponentType.Container},
    {name: '容器（三个）', cellsCount: 3, children: [], type: DesignComponentType.Container},
    {name: '容器（四个）', cellsCount: 4, children: [], type: DesignComponentType.Container},
  ];
  buildTools: Array<DesignComponentItem> = [
    {name: 'text', caption: '文本', type: DesignComponentType.TextInput},
    {name: 'singleSelect', caption: '单选', type: DesignComponentType.SingleSelection},
    {name: 'multiSelect', caption: '多选', type: DesignComponentType.MultiSelection},
    {name: 'table', caption: '表格', type: DesignComponentType.Table}
  ];

  targetBuilderTools: any[] = [];

  constructor(private _sheetService: DataSheetService) {
  }

  ngOnInit() {
  }

  quitDesign() {
    this._sheetService.exitDesignMode();
  }
}
