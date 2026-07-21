const Unit = require("../models/unitModel");

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

module.exports = {
    getUnitDetails,
    addUnitDetails,
    getUnitById
};