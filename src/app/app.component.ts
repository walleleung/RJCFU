import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild} from '@angular/core';
import {MainHostDirective} from './directive/main-host.directive';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(MainHostDirective)
  mainHost: MainHostDirective;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    // check login status
    if (true) {
      this.loadComponent(HomeComponent);
    } else {
      this.loadComponent(LoginComponent);
    }
  }

  private loadComponent(component: Type<any>) {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.mainHost.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }
}
