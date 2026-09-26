/**
 * This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
 * want this type to be a child of the `BitFlag` type.)
 *
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @enum
 * @notExported
 * @rename GibFlag
 * @see https://repentogon.com/
 */
declare const GibFlagInternal: {
    readonly BLOOD: number;
    readonly BONE: number;
    readonly GUT: number;
    readonly EYE: number;
    readonly LARGE: number;
    readonly POOP: number;
    readonly WORM: number;
    readonly ROCK: number;
    readonly ROCK_SMALL: number;
    readonly SOUND_BABY: number;
    readonly SOUND_BONE: number;
    readonly CHAIN: number;
    readonly DUST: number;
    readonly HUGE: number;
};
type GibFlagValue = BitFlag & {
    readonly __gibFlagBrand: symbol;
};
type GibFlagType = {
    readonly [K in keyof typeof GibFlagInternal]: GibFlagValue;
};
export declare const GibFlag: GibFlagType;
export type GibFlag = GibFlagType[keyof GibFlagType];
export declare const GibFlagZero: BitFlags<GibFlag>;
export {};
//# sourceMappingURL=GibFlag.d.ts.map