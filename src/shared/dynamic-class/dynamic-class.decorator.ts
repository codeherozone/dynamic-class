import { DynamicClassFactory } from './dynamic-class.factory';

/**
 * 動態類別裝飾器
 */
export function DynamicClass() {
  return (target: Function) => {
    DynamicClassFactory.record(target.name, target);
  };
}
