const asyncHandler = require("express-async-handler");
const bloomService = require("../services/bloomService");

<<<<<<< HEAD
<<<<<<< HEAD
// @Desc Create a bloom filter
// @Route POST /api/bloom/init
=======
>>>>>>> 7ae4858 (Bloom filter creation done)
=======
// @Desc Create a bloom filter
// @Route POST /api/bloom/init
>>>>>>> f212782 (Merge conflict resolved)
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
module.exports = {initializeBloomFilter};
>>>>>>> 7ae4858 (Bloom filter creation done)
=======
module.exports = { initializeBloomFilter };
>>>>>>> f212782 (Merge conflict resolved)
