local ____exports = {}
--- This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
-- want this type to be a child of the `BitFlag` type.)
-- 
-- This enum is for REPENTOGON, an exe-hack which expands the modding API.
-- 
-- @enum
-- @notExported
-- @rename AddHealthTypeFlag
-- @see https ://repentogon.com/
local AddHealthTypeFlagInternal = {
    NONE = 0,
    RED = 1 << 0,
    MAX = 1 << 1,
    SOUL = 1 << 2,
    BLACK = 1 << 3,
    ETERNAL = 1 << 4,
    GOLDEN = 1 << 5,
    BONE = 1 << 6,
    ROTTEN = 1 << 7,
    BROKEN = 1 << 8
}
____exports.AddHealthTypeFlag = AddHealthTypeFlagInternal
____exports.AddHealthTypeFlagZero = 0
return ____exports
