const BloomFilter = require("../models/bloomModel");

const getBloomFilter = async () => {
    const bloom = await BloomFilter.findOne();
    return bloom;
};

const initializeBloomFilter = async () => {
    const NUM_BITS = 95851;
    const EXPECTED_ITEMS = 10000;
    const NUM_HASHES = Math.ceil(Math.log(2) * (NUM_BITS / EXPECTED_ITEMS));
    const FALSE_POSITIVE_RATE = 0.01;

    bloom = await BloomFilter.create({
        numBits: NUM_BITS,
        numHashes: NUM_HASHES,
        expectedItems: EXPECTED_ITEMS,
        falsePositiveRate: FALSE_POSITIVE_RATE,
        buffer: Buffer.alloc(Math.ceil(NUM_BITS / 8))
    });

    return bloom;
};

module.exports = {initializeBloomFilter,getBloomFilter};