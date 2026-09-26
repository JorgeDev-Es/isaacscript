/**
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @see https://repentogon.com/
 */
export var DwmWindowAttribute;
(function (DwmWindowAttribute) {
    DwmWindowAttribute[DwmWindowAttribute["NC_RENDERING_ENABLED"] = 1] = "NC_RENDERING_ENABLED";
    DwmWindowAttribute[DwmWindowAttribute["NC_RENDERING_POLICY"] = 2] = "NC_RENDERING_POLICY";
    DwmWindowAttribute[DwmWindowAttribute["TRANSITIONS_FORCE_DISABLED"] = 3] = "TRANSITIONS_FORCE_DISABLED";
    DwmWindowAttribute[DwmWindowAttribute["ALLOW_NC_PAINT"] = 4] = "ALLOW_NC_PAINT";
    DwmWindowAttribute[DwmWindowAttribute["CAPTION_BUTTON_BOUNDS"] = 5] = "CAPTION_BUTTON_BOUNDS";
    DwmWindowAttribute[DwmWindowAttribute["NON_CLIENT_RTL_LAYOUT"] = 6] = "NON_CLIENT_RTL_LAYOUT";
    DwmWindowAttribute[DwmWindowAttribute["FORCE_ICONIC_REPRESENTATION"] = 7] = "FORCE_ICONIC_REPRESENTATION";
    // eslint-disable-next-line isaacscript/enum-member-number-separation
    DwmWindowAttribute[DwmWindowAttribute["FLIP_3D_POLICY"] = 8] = "FLIP_3D_POLICY";
    DwmWindowAttribute[DwmWindowAttribute["EXTENDED_FRAME_BOUNDS"] = 9] = "EXTENDED_FRAME_BOUNDS";
    DwmWindowAttribute[DwmWindowAttribute["HAS_ICONIC_BITMAP"] = 10] = "HAS_ICONIC_BITMAP";
    DwmWindowAttribute[DwmWindowAttribute["DISALLOW_PEEK"] = 11] = "DISALLOW_PEEK";
    DwmWindowAttribute[DwmWindowAttribute["EXCLUDED_FROM_PEEK"] = 12] = "EXCLUDED_FROM_PEEK";
    // REPENTOGON blocks the CLOAK and CLOAKED attributes from being used. Therefore, they have been
    // omitted from this enum.
    DwmWindowAttribute[DwmWindowAttribute["FREEZE_REPRESENTATION"] = 15] = "FREEZE_REPRESENTATION";
    DwmWindowAttribute[DwmWindowAttribute["PASSIVE_UPDATE_MODE"] = 16] = "PASSIVE_UPDATE_MODE";
    DwmWindowAttribute[DwmWindowAttribute["USE_HOST_BACKDROP_BRUSH"] = 17] = "USE_HOST_BACKDROP_BRUSH";
    DwmWindowAttribute[DwmWindowAttribute["USE_IMMERSIVE_DARK_MODE"] = 20] = "USE_IMMERSIVE_DARK_MODE";
    DwmWindowAttribute[DwmWindowAttribute["WINDOW_CORNER_PREFERENCE"] = 33] = "WINDOW_CORNER_PREFERENCE";
    DwmWindowAttribute[DwmWindowAttribute["BORDER_COLOR"] = 34] = "BORDER_COLOR";
    DwmWindowAttribute[DwmWindowAttribute["CAPTION_COLOR"] = 35] = "CAPTION_COLOR";
    DwmWindowAttribute[DwmWindowAttribute["TEXT_COLOR"] = 36] = "TEXT_COLOR";
    DwmWindowAttribute[DwmWindowAttribute["VISIBLE_FRAME_BORDER_THICKNESS"] = 37] = "VISIBLE_FRAME_BORDER_THICKNESS";
    DwmWindowAttribute[DwmWindowAttribute["SYSTEM_BACKDROP_TYPE"] = 38] = "SYSTEM_BACKDROP_TYPE";
    DwmWindowAttribute[DwmWindowAttribute["LAST"] = 39] = "LAST";
})(DwmWindowAttribute || (DwmWindowAttribute = {}));
