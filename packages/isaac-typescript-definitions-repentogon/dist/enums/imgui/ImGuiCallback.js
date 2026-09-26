/**
 * The type of autocomplete the command has for the debug console.
 *
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @see https://repentogon.com/
 */
export var ImGuiCallback;
(function (ImGuiCallback) {
    ImGuiCallback[ImGuiCallback["CLICKED"] = 0] = "CLICKED";
    ImGuiCallback[ImGuiCallback["HOVERED"] = 1] = "HOVERED";
    ImGuiCallback[ImGuiCallback["ACTIVE"] = 2] = "ACTIVE";
    ImGuiCallback[ImGuiCallback["FOCUSED"] = 3] = "FOCUSED";
    ImGuiCallback[ImGuiCallback["VISIBLE"] = 4] = "VISIBLE";
    ImGuiCallback[ImGuiCallback["EDITED"] = 5] = "EDITED";
    ImGuiCallback[ImGuiCallback["ACTIVATED"] = 6] = "ACTIVATED";
    ImGuiCallback[ImGuiCallback["DEACTIVATED"] = 7] = "DEACTIVATED";
    ImGuiCallback[ImGuiCallback["DEACTIVATED_AFTER_EDIT"] = 8] = "DEACTIVATED_AFTER_EDIT";
    ImGuiCallback[ImGuiCallback["TOGGLED_OPEN"] = 9] = "TOGGLED_OPEN";
    ImGuiCallback[ImGuiCallback["RENDER"] = 10] = "RENDER";
})(ImGuiCallback || (ImGuiCallback = {}));
