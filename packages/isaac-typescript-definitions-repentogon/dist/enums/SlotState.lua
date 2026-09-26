local ____exports = {}
--- This enum is for REPENTOGON, an exe-hack which expands the modding API.
-- 
-- @see https ://repentogon.com/
____exports.SlotState = {}
____exports.SlotState.IDLE = 1
____exports.SlotState[____exports.SlotState.IDLE] = "IDLE"
____exports.SlotState.IDLE_REWARD = 2
____exports.SlotState[____exports.SlotState.IDLE_REWARD] = "IDLE_REWARD"
____exports.SlotState.BOMBED = 3
____exports.SlotState[____exports.SlotState.BOMBED] = "BOMBED"
____exports.SlotState.PAYOUT = 4
____exports.SlotState[____exports.SlotState.PAYOUT] = "PAYOUT"
____exports.SlotState.REWARD = 5
____exports.SlotState[____exports.SlotState.REWARD] = "REWARD"
return ____exports
