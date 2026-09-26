local ____exports = {}
--- This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
-- want this type to be a child of the `BitFlag` type.)
-- 
-- This enum is for REPENTOGON, an exe-hack which expands the modding API.
-- 
-- @enum
-- @notExported
-- @rename ConceptionFamiliarFlag
-- @see https ://repentogon.com/
local ConceptionFamiliarFlagInternal = {
    LEECH = 1 << 0,
    DARK_BUM = 1 << 1,
    DEMON_BABY = 1 << 2,
    INCUBUS = 1 << 3,
    LIL_BRIMSTONE = 1 << 4,
    SUCCUBUS = 1 << 5,
    GUARDIAN_ANGEL = 1 << 6,
    HOLY_WATER = 1 << 7,
    RELIC = 1 << 8,
    SWORD_PROTECTOR = 1 << 9,
    SERAPHIM = 1 << 10,
    LIL_ABADDON = 1 << 11,
    TWISTED_PAIR = 1 << 12
}
____exports.ConceptionFamiliarFlag = ConceptionFamiliarFlagInternal
____exports.ConceptionFamiliarFlagZero = 0
return ____exports
