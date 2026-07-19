const BloomFilter = require("../models/bloomModel");

let bloomCache = null;

// ===== HASH FN 1 =====
const djb2 = (str) => {
    let hash = 5381;
    
    for (const ch of str) {
        hash = ((hash << 5) + hash) + ch.charCodeAt(0);
    }
    
    return hash >>> 0;
};

// ===== HASH FN 2 =====
const fnv1a = (str) => {
    let hash = 2166136261;
    
    for (const ch of str) {
        hash ^= ch.charCodeAt(0);
        hash = Math.imul(hash, 16777619);
    }
    
    return hash >>> 0;
};

// ===== USERNAME LOWERCASE CONVERSION =====
const normalizeUsername = (username) => {
    return username.trim().toLowerCase();
};

// ===== GET A PARTICULAR BIT LOCATION FROM BUFFER =====
const getBit = (buffer, bitIndex) => {
    const byteIndex = bitIndex >> 3;
    const bitOffset = bitIndex & 7;
    
    return (buffer[byteIndex] & (1 << bitOffset)) !== 0;
};

// ===== SET A PARTICULAR BIT LOCATION TO TRUE =====
const setBit = (buffer, bitIndex) => {
    const byteIndex = bitIndex >> 3;
    const bitOffset = bitIndex & 7;
    
    buffer[byteIndex] |= (1 << bitOffset);
};

// ===== GET BLOOM FILTER FROM CACHE OR DB =====
const getBloomFilter = async () => {
    if (!bloomCache) {
        bloomCache = await BloomFilter.findOne();
        
        if (!bloomCache) {
            throw Object.assign(new Error("Bloom Filter not initialized"), {
                statusCode: 500,
            });
        }
    }
    
    return bloomCache;
};

// ===== INITIALIZE A BLOOM FILTER =====
const initializeBloomFilter = async () => {
    const NUM_BITS = 95851;
    const EXPECTED_ITEMS = 10000;
    const NUM_HASHES = Math.ceil(Math.log(2) * (NUM_BITS / EXPECTED_ITEMS));
    const FALSE_POSITIVE_RATE = 0.01;
    
    const bloom = await BloomFilter.create({
        numBits: NUM_BITS,
        numHashes: NUM_HASHES,
        expectedItems: EXPECTED_ITEMS,
        falsePositiveRate: FALSE_POSITIVE_RATE,
        buffer: Buffer.alloc(Math.ceil(NUM_BITS / 8))
    });
    
    bloomCache = bloom;
    
    return bloom;
};

// ===== CHECK USERNAME AVAILABILITY =====
const checkUsername = async (username) => {
    username = normalizeUsername(username);
    
    const bloom = await getBloomFilter();
    
    const h1 = djb2(username);
    const h2 = fnv1a(username);
    
    for (let i = 0; i < bloom.numHashes; i++) {
        const idx = (h1 + i * h2) % bloom.numBits;
        
        if (!getBit(bloom.buffer, idx)) {
            return false;
        }
    }
    
    return true;
};

// ===== ADD USERNAME TO BLOOM FILTER =====
const addUsername = async (username) => {
    username = normalizeUsername(username);

    const bloom = await getBloomFilter();

    const h1 = djb2(username);
    const h2 = fnv1a(username);

    for (let i = 0; i < bloom.numHashes; i++) {
        const idx = (h1 + i * h2) % bloom.numBits;

        setBit(bloom.buffer, idx);
    }

    bloom.markModified("buffer");

    await bloom.save();
};

module.exports = {
    initializeBloomFilter,
    checkUsername,
    addUsername
};