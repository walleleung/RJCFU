import {DesignComponentItemBase} from './design-component-item-base';

export interface DesignComponentItemInput extends DesignComponentItemBase {
  type: string;
  hint: string;
  validation?: string;
  dataSource: string;
}
