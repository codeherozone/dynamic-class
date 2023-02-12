"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicClassFactory = void 0;
/**
 * 動態類別工廠
 */
class DynamicClassFactory {
    /**
     * 紀錄類別
     *
     * @method public
     * @param name   類別名稱
     * @param target 類別建構函式
     */
    static record(name, target) {
        this.list.set(name, target);
    }
    /**
     * 建立類別實例
     *
     * @method public
     * @param classNmae 類別名稱
     * @param args      類別參數
     * @return 回傳類別實例
     */
    static createInstance(classNmae, ...args) {
        const Prototype = this.list.get(classNmae);
        if (Prototype) {
            return new Prototype(...args);
        }
        else {
            throw new Error(`Class ${classNmae} undefined: please decorate the Class`);
        }
    }
}
exports.DynamicClassFactory = DynamicClassFactory;
/**
 * 類別清單
 */
DynamicClassFactory.list = new Map();
