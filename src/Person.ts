class Person {
    private static total = 0;
    private _id: number;
    constructor(readonly name: string) {
        this._id = ++Person.total;
    }
    get id() { return this._id; }
    static getTotal(): number { return Person.total; }
}

console.log(Person.getTotal());
const p1 = new Person('Alana');
console.log(p1.id)
const p2 = new Person('Flavio');
console.log(p2.id)
console.log(Person.getTotal());
