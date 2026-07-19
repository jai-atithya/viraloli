const asyncHandler = require("express-async-handler");
const bloomService = require("../services/bloomService");

<<<<<<< HEAD
// @Desc Create a bloom filter
// @Route POST /api/bloom/init
=======
>>>>>>> c1aa06e (Bloom filter creation done)
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

<<<<<<< HEAD
<<<<<<< HEAD
module.exports = { initializeBloomFilter };
=======
module.exports = { initializeBloomFilter };
>>>>>>> f212782 (Merge conflict resolved)
=======
module.exports = {initializeBloomFilter};
>>>>>>> c1aa06e (Bloom filter creation done)
