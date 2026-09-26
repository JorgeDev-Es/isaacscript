local ____exports = {}
--- This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
-- want this type to be a child of the `BitFlag` type.)
-- 
-- This enum is for REPENTOGON, an exe-hack which expands the modding API.
-- 
-- @enum
-- @notExported
-- @rename GetCollectibleFlag
-- @see https ://repentogon.com/
local GetCollectibleFlagInternal = {BAN_ACTIVE = 1 << 0, IGNORE_MODIFIERS = 1 << 1, BAN_PASSIVE = 1 << 2}
____exports.GetCollectibleFlag = GetCollectibleFlagInternal
____exports.GetCollectibleFlagZero = 0
return ____exports
