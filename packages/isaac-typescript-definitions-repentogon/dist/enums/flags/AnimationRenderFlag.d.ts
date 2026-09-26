/**
 * This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
 * want this type to be a child of the `BitFlag` type.)
 *
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @enum
 * @notExported
 * @rename AnimationRenderFlag
 * @see https://repentogon.com/
 */
declare const AnimationRenderFlagInternal: {
    /** Rapidly distorts the spritesheet position. */
    readonly GLITCH: number;
    /** This is reserved for champion NPCs and will not render for other NPCs. */
    readonly COLOR_OFFSET_CHAMPION: number;
    /** Dogma's static effect. */
    readonly STATIC: number;
    /**
     * Animated effects such as `AnimationRenderFlag.GOLDEN` and `AnimationRenderFlag.STATIC` will
     * continue to animate even if the game is paused.
     */
    readonly IGNORE_GAME_TIME: number;
    /** Golden effect used by golden trinkets. */
    readonly GOLDEN: number;
    /** Layer names starting with "*" will glow. */
    readonly ENABLE_LAYER_LIGHTING: number;
    /** Null layer names starting with "*" will glow. */
    readonly ENABLE_NULL_LAYER_LIGHTING: number;
};
type AnimationRenderFlagValue = BitFlag & {
    readonly __animationRenderFlagBrand: symbol;
};
type AnimationRenderFlagType = {
    readonly [K in keyof typeof AnimationRenderFlagInternal]: AnimationRenderFlagValue;
};
export declare const AnimationRenderFlag: AnimationRenderFlagType;
export type AnimationRenderFlag = AnimationRenderFlagType[keyof AnimationRenderFlagType];
export declare const AnimationRenderFlagZero: BitFlags<AnimationRenderFlag>;
export {};
//# sourceMappingURL=AnimationRenderFlag.d.ts.map