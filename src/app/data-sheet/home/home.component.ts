import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild} from '@angular/core';
import {SheetDataComponent} from '../sheet-data/sheet-data.component';
import {DataSheetService} from '../../service/data-sheet.service';
import {SheetDesignComponent} from '../sheet-design/sheet-design.component';
import {HostDirective} from '../host.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isDesign: boolean;

  @ViewChild(HostDirective)
  host: HostDirective;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
              private _dataSheetService: DataSheetService) {
    this.isDesign = false;
  }

  ngOnInit() {
    this.loadComponent(SheetDataComponent);
    this._dataSheetService.designStatusChange$.subscribe(p => {
      if (p) {
        this.isDesign = false;
        this.loadComponent(SheetDataComponent);
      }
    });
  }

  design() {
    this.isDesign = true;
    this.loadComponent(SheetDesignComponent);
  }

  private loadComponent(component: Type<any>) {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }
}
