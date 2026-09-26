/**
 * This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
 * want this type to be a child of the `BitFlag` type.)
 *
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @enum
 * @notExported
 * @rename WeaponModifierFlag
 * @see https://repentogon.com/
 */
declare const WeaponModifierFlagInternal: {
    readonly CHOCOLATE_MILK: number;
    readonly CURSED_EYE: number;
    readonly BRIMSTONE: number;
    readonly MONSTROS_LUNG: number;
    readonly LUDOVICO_TECHNIQUE: number;
    readonly ANTI_GRAVITY: number;
    readonly TRACTOR_BEAM: number;
    readonly SOY_MILK: number;
    readonly NEPTUNUS: number;
    readonly AZAZELS_SNEEZE: number;
    readonly C_SECTION: number;
    readonly FAMILIAR: number;
    readonly BONE: number;
};
type WeaponModifierFlagValue = BitFlag & {
    readonly __weaponModifierFlagBrand: symbol;
};
type WeaponModifierFlagType = {
    readonly [K in keyof typeof WeaponModifierFlagInternal]: WeaponModifierFlagValue;
};
export type WeaponModifierFlag = WeaponModifierFlagType[keyof WeaponModifierFlagType];
export declare const WeaponModifierFlag: WeaponModifierFlagType;
export declare const WeaponModifierFlagZero: BitFlags<WeaponModifierFlag>;
export {};
//# sourceMappingURL=WeaponModifierFlag.d.ts.map