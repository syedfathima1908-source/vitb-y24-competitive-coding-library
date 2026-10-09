class BitManipulation {
    static getBit(n, k) {
        return (BigInt(n) >> BigInt(k)) & 1n;
    }

    static setBit(n, k) {
        return BigInt(n) | (1n << BigInt(k));
    }

    static clearBit(n, k) {
        return BigInt(n) & ~(1n << BigInt(k));
    }

    static toggleBit(n, k) {
        return BigInt(n) ^ (1n << BigInt(k));
    }

    static isPowerOfTwo(n) {
        n = BigInt(n);
        return n > 0n && (n & (n - 1n)) === 0n;
    }

    static countSetBits(n) {
        n = BigInt(n);
        let count = 0;

        while (n > 0n) {
            n = n & (n - 1n);
            count++;
        }

        return count;
    }
}

module.exports = BitManipulation;