const Unit = require("../models/unitModel");

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



module.exports = {
    getUnitDetails,
    addUnitDetails,
    getUnitByNumber,
};