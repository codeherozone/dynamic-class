/**
 * 動態類別工廠
 */
export declare class DynamicClassFactory {
    /**
     * 類別清單
     */
    protected static list: Map<string, Function>;
    /**
     * 紀錄類別
     *
     * @method public
     * @param name   類別名稱
     * @param target 類別建構函式
     */
    static record(name: string, target: Function): void;
    /**
     * 建立類別實例
     *
     * @method public
     * @param classNmae 類別名稱
     * @param args      類別參數
     * @return 回傳類別實例
     */
    static createInstance<T = any>(classNmae: string, ...args: any[]): T;
}
