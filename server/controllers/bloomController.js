const asyncHandler = require("express-async-handler");
const bloomService = require("../services/bloomService");

const initializeBloomFilter = asyncHandler(async (req, res) => {
    const bloom = await bloomService.getBloomFilter();
    if (bloom) {
        res.status(409).json({
            success: false,
            message: "Bloom Filter already exists",
            data: bloom
        });
    }
    const newBloom = await bloomService.initializeBloomFilter();
    res.status(201).json({
        success: true,
        message: "Bloom filter created successfully",
        data: newBloom
    });
});

module.exports = {initializeBloomFilter};