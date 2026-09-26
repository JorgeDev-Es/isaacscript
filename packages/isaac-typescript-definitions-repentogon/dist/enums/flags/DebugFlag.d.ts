/**
 * This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
 * want this type to be a child of the `BitFlag` type.)
 *
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @enum
 * @notExported
 * @rename DebugFlag
 * @see https://repentogon.com/
 */
declare const DebugFlagInternal: {
    readonly ENTITY_POSITIONS: number;
    readonly GRID: number;
    readonly INFINITE_HP: number;
    readonly HIGH_DAMAGE: number;
    readonly ROOM_INFO: number;
    readonly HIT_SPHERES: number;
    readonly DAMAGE_VALUES: number;
    readonly INFINITE_ITEM_CHARGES: number;
    readonly HIGH_LUCK: number;
    readonly QUICK_KILL: number;
    readonly GRID_INFO: number;
    readonly PLAYER_ITEM_INFO: number;
    readonly GRID_COLLISION_POINTS: number;
    readonly LUA_MEMORY_USAGE: number;
};
type DebugFlagValue = BitFlag & {
    readonly __DebugFlagBrand: symbol;
};
type DebugFlagType = {
    readonly [K in keyof typeof DebugFlagInternal]: DebugFlagValue;
};
export declare const DebugFlag: DebugFlagType;
export type DebugFlag = DebugFlagType[keyof DebugFlagType];
export declare const DebugFlagZero: BitFlags<DebugFlag>;
export {};
//# sourceMappingURL=DebugFlag.d.ts.map