local ____exports = {}
--- This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
-- want this type to be a child of the `BitFlag` type.)
-- 
-- This enum is for REPENTOGON, an exe-hack which expands the modding API.
-- 
-- @enum
-- @notExported
-- @rename ImGuiWindowFlag
-- @see https ://repentogon.com/
local ImGuiWindowFlagInternal = {
    NONE = 0,
    NO_TITLE_BAR = 1 << 0,
    NO_RESIZE = 1 << 1,
    NO_MOVE = 1 << 2,
    NO_SCROLLBAR = 1 << 3,
    NO_SCROLL_WITH_MOUSE = 1 << 4,
    NO_COLLAPSE = 1 << 5,
    ALWAYS_AUTO_RESIZE = 1 << 6,
    NO_BACKGROUND = 1 << 7,
    NO_SAVED_SETTINGS = 1 << 8,
    NO_MOUSE_INPUTS = 1 << 9,
    MENU_BAR = 1 << 10,
    HORIZONTAL_SCROLLBAR = 1 << 11,
    NO_FOCUS_ON_APPEARING = 1 << 12,
    NO_BRING_TO_FRONT_ON_FOCUS = 1 << 13,
    ALWAYS_VERTICAL_SCROLLBAR = 1 << 14,
    ALWAYS_HORIZONTAL_SCROLLBAR = 1 << 15,
    NO_NAV_INPUTS = 1 << 16,
    NO_NAV_FOCUS = 1 << 17,
    UNSAVED_DOCUMENT = 1 << 18
}
____exports.ImGuiWindowFlag = ImGuiWindowFlagInternal
____exports.ImGuiWindowFlagZero = 0
return ____exports
