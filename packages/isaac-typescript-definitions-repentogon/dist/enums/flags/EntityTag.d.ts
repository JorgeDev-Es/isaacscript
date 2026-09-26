/**
 * This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
 * want this type to be a child of the `BitFlag` type.)
 *
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @enum
 * @notExported
 * @rename EntityTag
 * @see https://repentogon.com/
 */
declare const EntityTagInternal: {
    readonly FLY: number;
    readonly SPIDER: number;
    readonly GHOST: number;
    readonly NO_REROLL: number;
    readonly CAN_SACRIFICE: number;
    readonly EXPLOSIVE_SOUL: number;
    readonly HOMING_SOUL: number;
    readonly BRIMSTONE_SOUL: number;
    readonly NO_DELIRIUM: number;
};
type EntityTagValue = BitFlag & {
    readonly __entityTagBrand: symbol;
};
type EntityTagType = {
    readonly [K in keyof typeof EntityTagInternal]: EntityTagValue;
};
export declare const EntityTag: EntityTagType;
export type EntityTag = EntityTagType[keyof EntityTagType];
export declare const EntityTagZero: BitFlags<EntityTag>;
export {};
//# sourceMappingURL=EntityTag.d.ts.map