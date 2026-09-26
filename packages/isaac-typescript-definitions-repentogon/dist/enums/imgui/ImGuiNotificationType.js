/**
 * The type of autocomplete the command has for the debug console.
 *
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @see https://repentogon.com/
 */
export var ImGuiNotificationType;
(function (ImGuiNotificationType) {
    ImGuiNotificationType[ImGuiNotificationType["INFO"] = 0] = "INFO";
    ImGuiNotificationType[ImGuiNotificationType["SUCCESS"] = 1] = "SUCCESS";
    ImGuiNotificationType[ImGuiNotificationType["WARNING"] = 2] = "WARNING";
    ImGuiNotificationType[ImGuiNotificationType["ERROR"] = 3] = "ERROR";
})(ImGuiNotificationType || (ImGuiNotificationType = {}));
