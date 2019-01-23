import {DesignComponentType} from './design-component-type.enum';

export interface DesignComponentItem {
  type: DesignComponentType;
  name: string;
  caption: string;
}
