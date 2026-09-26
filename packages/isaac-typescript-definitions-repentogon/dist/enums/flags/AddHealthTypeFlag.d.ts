/**
 * This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
 * want this type to be a child of the `BitFlag` type.)
 *
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @enum
 * @notExported
 * @rename AddHealthTypeFlag
 * @see https://repentogon.com/
 */
declare const AddHealthTypeFlagInternal: {
    readonly NONE: 0;
    readonly RED: number;
    readonly MAX: number;
    readonly SOUL: number;
    readonly BLACK: number;
    readonly ETERNAL: number;
    readonly GOLDEN: number;
    readonly BONE: number;
    readonly ROTTEN: number;
    readonly BROKEN: number;
};
type AddHealthTypeFlagValue = BitFlag & {
    readonly __addHealthTypeFlagBrand: symbol;
};
type AddHealthTypeFlagFlag = {
    readonly [K in keyof typeof AddHealthTypeFlagInternal]: AddHealthTypeFlagValue;
};
export declare const AddHealthTypeFlag: AddHealthTypeFlagFlag;
export type AddHealthTypeFlag = AddHealthTypeFlagFlag[keyof AddHealthTypeFlagFlag];
export declare const AddHealthTypeFlagZero: BitFlags<AddHealthTypeFlag>;
export {};
//# sourceMappingURL=AddHealthTypeFlag.d.ts.map