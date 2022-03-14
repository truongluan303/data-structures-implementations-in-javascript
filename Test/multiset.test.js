const { Multiset } = require("../DataStructures/multiset");


test('all functions', () => {
    ms = new Multiset();
    ms.add(0);
    let count = 1;
    for (let i = 1; i < 10; i++) {
        expect(() => ms.arr(-1)).toThrow(Error);
        ms.add(i, i * 2);
        count += i * 2;
        expect(ms.size).toBe(count);
    }
    expect(ms.getFrequencyOf(0)).toBe(1);
    for (let i = 1; i < 10; i++) {
        expect(ms.getFrequencyOf(i)).toBe(i * 2);
        ms.remove(i, i);
        count -= i;
        expect(ms.size).toBe(count);
        expect(ms.getFrequencyOf(i)).toBe(i);
    }
    for (let i = 1; i < 10; i++) {
        expect(() => ms.remove(-1)).toThrow(Error);
        expect(() => ms.remove(i, i * 2)).toThrow(Error);
        ms.removeAll(i);
        expect(ms.getFrequencyOf(i)).toBe(0);
    }
    ms.removeAll(0);
    expect(ms.size).toBe(0);
    expect(ms.isEmpty).toBe(true);
});