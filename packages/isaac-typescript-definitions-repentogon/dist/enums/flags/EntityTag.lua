local ____exports = {}
--- This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
-- want this type to be a child of the `BitFlag` type.)
-- 
-- This enum is for REPENTOGON, an exe-hack which expands the modding API.
-- 
-- @enum
-- @notExported
-- @rename EntityTag
-- @see https ://repentogon.com/
local EntityTagInternal = {
    FLY = 1 << 0,
    SPIDER = 1 << 1,
    GHOST = 1 << 3,
    NO_REROLL = 1 << 4,
    CAN_SACRIFICE = 1 << 5,
    EXPLOSIVE_SOUL = 1 << 6,
    HOMING_SOUL = 1 << 7,
    BRIMSTONE_SOUL = 1 << 8,
    NO_DELIRIUM = 1 << 9
}
____exports.EntityTag = EntityTagInternal
____exports.EntityTagZero = 0
return ____exports
