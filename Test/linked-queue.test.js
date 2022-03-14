const { LinkedQueue } = require("../DataStructures/linked-queue");


test('enqueue, peek, dequeue', () => {
    let lq = new LinkedQueue();
    let arr = [];

    lq.enqueue(1);
    expect(lq.peek()).toBe(1);
    expect(lq.dequeue()).toBe(1);
    expect(lq.isEmpty).toBe(true);

    for (let i = 0; i < 100; i++) {
        lq.enqueue(i);
        arr.push(i);
        expect(lq.size).toBe(i + 1);
    }

    while (!lq.isEmpty) {
        expect(lq.size).toBe(arr.length);
        expect(lq.peek()).toBe(arr[0]);
        expect(lq.dequeue()).toBe(arr[0])
        arr.shift();
    }

    expect(() => lq.peek()).toThrow(Error);
    expect(() => lq.dequeue()).toThrow(Error);
});


test('contains, remove, clear', () => {
    let lq = new LinkedQueue();

    for (let i = 0; i < 100; i++) {
        lq.enqueue(i);
    }
    for (let i = 10; i < 20; i++) {    
        expect(lq.contains(i)).toBe(true);
        expect(lq.remove(i)).toBe(true);
        expect(lq.contains(i)).toBe(false);
    }
    for (let i = 100; i < 110; i++) {
        expect(lq.contains(i)).toBe(false);
        expect(lq.contains(i)).toBe(false);
    }

    lq.clear();
    expect(lq.size).toBe(0);
    expect(lq.isEmpty).toBe(true);
    expect(() => lq.remove(1)).toThrow(Error);
});