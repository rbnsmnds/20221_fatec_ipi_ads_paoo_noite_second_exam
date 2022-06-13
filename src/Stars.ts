class Lua {
    private static nextId = 0;
    private _id: number;
    constructor(readonly nome: string) {
        this._id = ++Lua.nextId;
    }
    get id() { return this._id; }
}

class Planeta {
    private static nextId = 0;
    private _id: number;
    private readonly luas: Lua[] = [];
    constructor(readonly nome: string, luas: Lua[]) {
        this._id = ++Planeta.nextId;
        for (const lua of luas) this.luas.push(lua);
    }
    get id() { return this._id; }
    *getLuas(): Generator<Lua, void> {
        for (const lua of this.luas) yield lua;
    }
}

class Sol {
    private static nextId = 0;
    private _id: number;
    private readonly planetas: Planeta[] = [];
    constructor(readonly nome: string, planetas: Planeta[]) {
        this._id = ++Sol.nextId;
        for (const planeta of planetas) this.planetas.push(planeta);
    }
    get id() { return this._id; }
    *getPlanetas(): Generator<Planeta, void> {
        for (const planeta of this.planetas) yield planeta;
    }
    numeroDePlanetas(): number { return this.planetas.length; }
    *getLuas(): Generator<Lua, void> {
        for (const planeta of this.planetas)
            for (const lua of planeta.getLuas())
                yield lua;
    }
}

function solMaisPopuloso(sois: Sol[]): Sol|undefined {
    if (sois.length == 0) return undefined;
    /*let cand = sois[0];
    for (const sol of sois)
        if (sol.numeroDePlanetas() > cand.numeroDePlanetas()) cand = sol;
    return cand;*/

    return sois.reduce(
        (cand, sol) => sol.numeroDePlanetas() > cand.numeroDePlanetas()
                       ? sol
                       : cand);
}

const luas1 = [new Lua('Lua 1'), new Lua('Lua 2')];
const pl1 = new Planeta("Planeta 1", luas1);
const luas2 = [new Lua('Lua 3'), new Lua('Lua 4')];
const pl2 = new Planeta('Planeta 2', luas2);
const sol1 = new Sol('Sol1', [pl1, pl2]);
const sol2 = new Sol('Sol2', [pl1, pl1, pl2, pl2]);
const sol = solMaisPopuloso([sol1, sol2])
console.log(sol == undefined ? 'nenhum' : sol.nome);