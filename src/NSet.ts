class NSet {
    // invariante:
    // o array elements nao contem elementos repetidos
    private elements: number[] = [];

    constructor(xs: number[]) {
        for (const x of xs) this.add(x);
    }
    // para cada objeto obj: NSet
    // e cada x: number vale que:
    // obj.add(x)
    // obj.has(x) -> true
    add(x: number): void {
        const idx = this.elements.indexOf(x);
        // se idx == -1 então x nao e elemento de elements
        if (idx == -1) this.elements.push(x);

    } 
    has(x: number): boolean {
        return this.elements.indexOf(x) != -1;
    }
    // para cada objeto obj: NSet
    // e cada x: number vale que:
    // obj.remove(x)
    // obj.has(x) -> false
    remove(x: number): void {
        const idx = this.elements.indexOf(x);
        if (idx != -1) {
            const last = this.elements.length-1;
            this.elements[idx] = this.elements[last];
            this.elements.pop();
        }
    }
}

const conj = new NSet([1, 4, 2, 1, 1, 3]);
conj.add(8);
console.log(conj.has(8));
conj.remove(1);
console.log(conj.has(1));
