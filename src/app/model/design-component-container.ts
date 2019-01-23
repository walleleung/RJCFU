import {DesignComponentType} from './design-component-type.enum';

export interface DesignComponentContainer {
  name: string;
  cellsCount: number;
  children: Array<any>;
  type: DesignComponentType;
}
