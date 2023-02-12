"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicClass = void 0;
const dynamic_class_factory_1 = require("./dynamic-class.factory");
/**
 * 動態類別裝飾器
 */
function DynamicClass() {
    return (target) => {
        dynamic_class_factory_1.DynamicClassFactory.record(target.name, target);
    };
}
exports.DynamicClass = DynamicClass;
