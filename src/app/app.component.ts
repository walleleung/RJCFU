import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild} from '@angular/core';
import {MainHostDirective} from './directive/main-host.directive';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SystemService} from './service/system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(MainHostDirective)
  mainHost: MainHostDirective;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
              private _systemService: SystemService) {
  }

  ngOnInit(): void {
    // check login status
    this.refresh();
    this._systemService.userStatusChange$.subscribe(() => {
      this.refresh();
    });
  }

  public refresh() {
    this._systemService.getUserStatus().subscribe(p => {
      if (p) {
        this.loadComponent(HomeComponent);
      } else {
        this.loadComponent(LoginComponent);
      }
    });
  }

  private loadComponent(component: Type<any>) {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.mainHost.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }
}
