/**
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @see https://repentogon.com/
 */
export var BlendType;
(function (BlendType) {
    /** Ignores any kind of source/destination modifiers. */
    BlendType[BlendType["CONSTANT"] = 0] = "CONSTANT";
    BlendType[BlendType["NORMAL"] = 1] = "NORMAL";
    BlendType[BlendType["ADDITIVE"] = 2] = "ADDITIVE";
    BlendType[BlendType["MULTIPLICATIVE"] = 3] = "MULTIPLICATIVE";
    BlendType[BlendType["OVERLAY"] = 4] = "OVERLAY";
})(BlendType || (BlendType = {}));
