/**
 * This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
 * want this type to be a child of the `BitFlag` type.)
 *
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @enum
 * @notExported
 * @rename ConceptionFamiliarFlag
 * @see https://repentogon.com/
 */
declare const ConceptionFamiliarFlagInternal: {
    readonly LEECH: number;
    readonly DARK_BUM: number;
    readonly DEMON_BABY: number;
    readonly INCUBUS: number;
    readonly LIL_BRIMSTONE: number;
    readonly SUCCUBUS: number;
    readonly GUARDIAN_ANGEL: number;
    readonly HOLY_WATER: number;
    readonly RELIC: number;
    readonly SWORD_PROTECTOR: number;
    readonly SERAPHIM: number;
    readonly LIL_ABADDON: number;
    readonly TWISTED_PAIR: number;
};
type ConceptionFamiliarFlagValue = BitFlag & {
    readonly __conceptionFamiliarFlagBrand: symbol;
};
type ConceptionFamiliarFlagType = {
    readonly [K in keyof typeof ConceptionFamiliarFlagInternal]: ConceptionFamiliarFlagValue;
};
export type ConceptionFamiliarFlag = ConceptionFamiliarFlagType[keyof ConceptionFamiliarFlagType];
export declare const ConceptionFamiliarFlag: ConceptionFamiliarFlagType;
export declare const ConceptionFamiliarFlagZero: BitFlags<ConceptionFamiliarFlag>;
export {};
//# sourceMappingURL=ConceptionFamiliarFlag.d.ts.map