import {
  DynamicClass,
  DynamicClassFactory as Factory,
} from '@codehero/dynamic-class';

/**
 * 自定義介面
 */
export interface Custom {
  /**
   * 自定義欄位
   */
  name: string;
  /**
   * 自定義欄位
   */
  age?: number;
}

/**
 * 自定義類別
 */
@DynamicClass()
export class CustomA implements Custom {
  /**
   * 自定義欄位
   */
  private _id = 'A';

  /**
   * @param name 自定義欄位
   * @param age  自定義欄位
   */
  constructor(public name: string, public age?: number) {}
}

const customer = Factory.createInstance<Custom>('CustomA', 'John', 20);
console.log(customer);
