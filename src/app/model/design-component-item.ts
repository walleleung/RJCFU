import {DesignComponentType} from './design-component-type.enum';
import {DesignComponentItemBase} from './design-component-item-base';

export interface DesignComponentItem {
  type: DesignComponentType;
  name: string;
  tooltip: string;
  implement?: DesignComponentItemBase;
}
