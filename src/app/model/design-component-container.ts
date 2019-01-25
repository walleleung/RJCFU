import {DesignComponentType} from './design-component-type.enum';

export interface DesignComponentContainer {
  name: string;
  tooltip: string;
  children: Array<any>;
  type: DesignComponentType;
}
