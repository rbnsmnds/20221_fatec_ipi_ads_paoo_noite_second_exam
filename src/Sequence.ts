interface Seq {
    next(): void;
    value(): number;
}

class IncByOne implements Seq {
    // se value() -> k, então a sequencia next(), value() -> k+1 
    constructor(private val = 0) {}
    value(): number { return this.val; }
    next(): void { ++this.val; }
}

class InhIncByTwo extends IncByOne {
    // ERRADO!
    constructor(v: number = 0) { super(v); }
    next(): void { super.next(); super.next(); }
}

class CompIncByTwo implements Seq {
    private inc: IncByOne;
    constructor(v: number) {
        this.inc = new IncByOne(v);
    }
    next(): void {
        this.inc.next(); this.inc.next();
    }
    value(): number { return this.inc.value(); }
}

function next(inc: IncByOne, k: number) {
    const xs = []
    for (let i = 0; i < k; ++i) {   
        xs.push(inc.value());
        inc.next();
    }
    return xs;
}

const i1 = new IncByOne(10);
const i2 = new InhIncByTwo(20);
const c2 = new CompIncByTwo(30)
console.log(next(i1, 10));
console.log(next(i2, 10));
// console.log(next(c2, 10));