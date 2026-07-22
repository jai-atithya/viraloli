const Unit = require("../models/unitModel");
const Progress = require("../models/progressModel");

// ==== GET ALL UNIT DETAILS ====
const getUnitDetails = async () => {
    return Unit.find({})
        .sort({ unitNumber: 1 })
        .lean();
};

// ==== ADD UNIT ====
const addUnitDetails = async (unitData) => {
    return Unit.create(unitData);
};

// ==== GET UNIT BY UNIT NUMBER ====
const getUnitByNumber = async (unitNumber) => {
    return Unit.findOne({ unitNumber }).lean();
};

// ==== GET CURRENT UNIT DETAILS ====
const getCurrentUnitDetails = async (userId) => {
    return Progress.findOne({ userId })
        .sort({ createdAt: -1 })
        .lean();
};

module.exports = {
    getUnitDetails,
    addUnitDetails,
    getUnitByNumber,
    getCurrentUnitDetails,
};