/**
 * The type of autocomplete the command has for the debug console.
 *
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @see https://repentogon.com/
 */
export var ImGuiData;
(function (ImGuiData) {
    /** Descriptive text of an element. */
    ImGuiData[ImGuiData["LABEL"] = 0] = "LABEL";
    /** Used for single value elements like text inputs, the currently selected Radio Button, etc. */
    ImGuiData[ImGuiData["VALUE"] = 1] = "VALUE";
    /** Used for elements that use an array as their data source like Radio Buttons, Plots, etc. */
    ImGuiData[ImGuiData["LIST_VALUES"] = 2] = "LIST_VALUES";
    /** Minimum value of a slider input. */
    ImGuiData[ImGuiData["MIN"] = 3] = "MIN";
    /** Maximum value of a slider input. */
    ImGuiData[ImGuiData["MAX"] = 4] = "MAX";
    /** Hint text of a text input, or overlay texts used in plots or progress bars. */
    ImGuiData[ImGuiData["HINT_TEXT"] = 5] = "HINT_TEXT";
    /** Color input. Can be RGB or RGBA. */
    ImGuiData[ImGuiData["COLOR_VALUES"] = 6] = "COLOR_VALUES";
})(ImGuiData || (ImGuiData = {}));
