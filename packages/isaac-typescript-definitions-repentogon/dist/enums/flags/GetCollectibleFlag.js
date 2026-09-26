/**
 * This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
 * want this type to be a child of the `BitFlag` type.)
 *
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @enum
 * @notExported
 * @rename GetCollectibleFlag
 * @see https://repentogon.com/
 */
const GetCollectibleFlagInternal = {
    /** Bans active collectibles. */
    BAN_ACTIVE: 1 << 0,
    /**
     * Ignores attempts to morph the collectible into Magic Skin or Rosary. Does not prevent morphing
     * the collectible into The Bible.
     */
    IGNORE_MODIFIERS: 1 << 1,
    BAN_PASSIVE: 1 << 2,
    /** Bans passive collectibles. */
};
export const GetCollectibleFlag = GetCollectibleFlagInternal;
export const GetCollectibleFlagZero = 0;
