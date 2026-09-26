/**
 * The type of autocomplete the command has for the debug console.
 *
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @see https://repentogon.com/
 */
export var ImGuiElement;
(function (ImGuiElement) {
    ImGuiElement[ImGuiElement["WINDOW"] = 0] = "WINDOW";
    ImGuiElement[ImGuiElement["MENU"] = 1] = "MENU";
    ImGuiElement[ImGuiElement["MENU_ITEM"] = 2] = "MENU_ITEM";
    ImGuiElement[ImGuiElement["POPUP"] = 3] = "POPUP";
    ImGuiElement[ImGuiElement["COLLAPSING_HEADER"] = 4] = "COLLAPSING_HEADER";
    ImGuiElement[ImGuiElement["TREE_NODE"] = 5] = "TREE_NODE";
    ImGuiElement[ImGuiElement["SEPARATOR"] = 6] = "SEPARATOR";
    ImGuiElement[ImGuiElement["SEPARATOR_TEXT"] = 7] = "SEPARATOR_TEXT";
    ImGuiElement[ImGuiElement["TEXT"] = 8] = "TEXT";
    ImGuiElement[ImGuiElement["TEXT_WRAPPED"] = 9] = "TEXT_WRAPPED";
    ImGuiElement[ImGuiElement["BULLET_TEXT"] = 10] = "BULLET_TEXT";
    ImGuiElement[ImGuiElement["SAME_LINE"] = 11] = "SAME_LINE";
    ImGuiElement[ImGuiElement["BUTTON"] = 12] = "BUTTON";
    ImGuiElement[ImGuiElement["SMALL_BUTTON"] = 13] = "SMALL_BUTTON";
    ImGuiElement[ImGuiElement["INPUT_INT"] = 14] = "INPUT_INT";
    ImGuiElement[ImGuiElement["INPUT_FLOAT"] = 15] = "INPUT_FLOAT";
    ImGuiElement[ImGuiElement["DRAG_INT"] = 16] = "DRAG_INT";
    ImGuiElement[ImGuiElement["DRAG_FLOAT"] = 17] = "DRAG_FLOAT";
    ImGuiElement[ImGuiElement["SLIDER_INT"] = 18] = "SLIDER_INT";
    ImGuiElement[ImGuiElement["SLIDER_FLOAT"] = 19] = "SLIDER_FLOAT";
    ImGuiElement[ImGuiElement["COLOR_EDIT"] = 20] = "COLOR_EDIT";
    ImGuiElement[ImGuiElement["TAB_BAR"] = 21] = "TAB_BAR";
    ImGuiElement[ImGuiElement["TAB"] = 22] = "TAB";
    ImGuiElement[ImGuiElement["CHECKBOX"] = 23] = "CHECKBOX";
    ImGuiElement[ImGuiElement["RADIO_BUTTON"] = 24] = "RADIO_BUTTON";
    ImGuiElement[ImGuiElement["COMBOBOX"] = 25] = "COMBOBOX";
    ImGuiElement[ImGuiElement["INPUT_TEXT"] = 26] = "INPUT_TEXT";
    ImGuiElement[ImGuiElement["INPUT_TEXT_WITH_HINT"] = 27] = "INPUT_TEXT_WITH_HINT";
    ImGuiElement[ImGuiElement["INPUT_TEXT_MULTILINE"] = 28] = "INPUT_TEXT_MULTILINE";
    ImGuiElement[ImGuiElement["INPUT_CONTROLLER"] = 29] = "INPUT_CONTROLLER";
    ImGuiElement[ImGuiElement["INPUT_KEYBOARD"] = 30] = "INPUT_KEYBOARD";
    ImGuiElement[ImGuiElement["PLOT_LINES"] = 31] = "PLOT_LINES";
    ImGuiElement[ImGuiElement["PLOT_HISTOGRAM"] = 32] = "PLOT_HISTOGRAM";
})(ImGuiElement || (ImGuiElement = {}));
