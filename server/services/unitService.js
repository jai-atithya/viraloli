const Unit = require("../models/unitModel");
const Progress = require("../models/progressModel");

// ==== GET ALL UNIT DETAILS ====
const getUnitDetails = async () => {
    return await Unit.find({})
        .sort({ unitNumber: 1 })
        .lean();
};

// ==== ADD UNIT ====
const addUnitDetails = async (unitData) => {
    return await Unit.create(unitData);
};

// ==== GET UNIT BY UNIT ID ====
const getUnitById = async (unitId) => {
    return await Unit.find(unitId);
}

// ==== GET CURRENT UNIT DETAILS ====
const getCurrentUnitDetails = async (userId) => {
    return await Progress.findOne({ userId })
        .sort({ createdAt: -1 })
        .lean();
};

module.exports = {
    getUnitDetails,
    addUnitDetails,
    getUnitById,
    getCurrentUnitDetails
};