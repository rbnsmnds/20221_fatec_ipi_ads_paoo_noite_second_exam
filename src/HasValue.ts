interface HasValue {
    getValue(): number;
}

class Item implements HasValue {
    constructor(readonly name: string, private val: number) {}
    getValue() { return this.val; }
}

class XItem implements HasValue {
    constructor(private val: number) {}
    getValue() { return this.val; }
}

function sum(vs: HasValue[]): number {
    return vs.reduce((acc, v) => acc + v.getValue(), 0);
    /*let acc = 0;
    for (const v of vs) acc += v.getValue();
    return acc;*/
}

const item = new Item('Caneta', 5);
const xitem = new XItem(10);
const itens: HasValue[] = [item, xitem];
console.log(sum(itens));
