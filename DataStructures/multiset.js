class Multiset {
    #hmap
    #size

    constructor() {
        this.#hmap = {}
        this.#size = 0
    }

    add(value, freqency = 1) {
        if (freqency < 0) {
            throw new InvalidFrequencyException();
        }
        if (!(value in this.#hmap)) {
            this.#hmap[value] = 0;
        }
        this.#hmap[value] += freqency;
        this.#size += freqency;
        return this.#hmap[value];
    }

    remove(value, freqency = 1) {
        if (!(value in this.#hmap) || 
            freqency < 0 || 
            freqency > this.#hmap[value]) {
            throw new InvalidFrequencyException();
        }
        this.#hmap[value] -= freqency;
        this.#size -= freqency;
        if (this.#hmap[value] == 0) {
            delete this.#hmap[value];
            return 0;
        }
        return this.#hmap[value];
    }

    removeAll(value) {
        if (!(value in this.#hmap)) {
            return;
        }
        this.#size -= this.#hmap[value];
        this.#hmap[value] = 0;
    }

    getValues() {
        return Object.keys(this.#hmap);
    }

    getFrequencyOf(value) {
        if (!(value in this.#hmap)) {
            return 0;
        }
        return this.#hmap[value];
    }

    get size() {
        return this.#size;
    }

    get isEmpty() {
        return this.#size == 0;
    }
}


class InvalidFrequencyException extends Error {
    constructor() {
        super("The given frequency is invalid");
    }
}

module.exports = { Multiset };