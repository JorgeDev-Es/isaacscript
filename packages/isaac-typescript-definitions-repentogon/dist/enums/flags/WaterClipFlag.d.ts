/**
 * This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
 * want this type to be a child of the `BitFlag` type.)
 *
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @enum
 * @notExported
 * @rename WaterClipFlag
 * @see https://repentogon.com/
 */
declare const WaterClipFlagInternal: {
    /** When set for an Entity, also enables rendering below water. */
    readonly DISABLE_RENDER_ABOVE_WATER: number;
    /**
     * Allows the entity to be rendered below the water along with being rendered above the water.
     * Only works for entities.
     */
    readonly ENABLE_RENDER_BELOW_WATER: number;
    /** Prevents the entity from being rendered below the water. Takes priority over other flags. */
    readonly DISABLE_RENDER_BELOW_WATER: number;
    /** Prevents the entity from having its reflection be rendered. Only works for entities. */
    readonly DISABLE_RENDER_REFLECTION: number;
    /** Overrides other flags and only allows the entity to render above water with no reflection. */
    readonly IGNORE_WATER_RENDERING: number;
    /**
     * Forces the entity to spawn water ripple effects regardless of if they're on the ground or not.
     * Only works for entities.
     */
    readonly FORCE_WATER_RIPPLE_WHEN_MOVING: number;
};
type WaterClipFlagValue = BitFlag & {
    readonly __waterClipFlagBrand: symbol;
};
type WaterClipFlagType = {
    readonly [K in keyof typeof WaterClipFlagInternal]: WaterClipFlagValue;
};
export declare const WaterClipFlag: WaterClipFlagType;
export type WaterClipFlag = WaterClipFlagType[keyof WaterClipFlagType];
export declare const WaterClipFlagZero: BitFlags<WaterClipFlag>;
export {};
//# sourceMappingURL=WaterClipFlag.d.ts.map