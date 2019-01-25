import {DesignComponentType} from './design-component-type.enum';
import {DesignComponentItemData} from './design-component-item-data';

export interface DesignComponentItem {
  type: DesignComponentType;
  name: string;
  tooltip: string;
  data?: DesignComponentItemData;
}
