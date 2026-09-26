local ____exports = {}
--- This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
-- want this type to be a child of the `BitFlag` type.)
-- 
-- This enum is for REPENTOGON, an exe-hack which expands the modding API.
-- 
-- @enum
-- @notExported
-- @rename WaterClipFlag
-- @see https ://repentogon.com/
local WaterClipFlagInternal = {
    DISABLE_RENDER_ABOVE_WATER = 1 << 1,
    ENABLE_RENDER_BELOW_WATER = 1 << 2,
    DISABLE_RENDER_BELOW_WATER = 1 << 3,
    DISABLE_RENDER_REFLECTION = 1 << 5,
    IGNORE_WATER_RENDERING = 1 << 6,
    FORCE_WATER_RIPPLE_WHEN_MOVING = 1 << 7
}
____exports.WaterClipFlag = WaterClipFlagInternal
____exports.WaterClipFlagZero = 0
return ____exports
