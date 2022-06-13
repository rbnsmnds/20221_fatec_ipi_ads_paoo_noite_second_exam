class Singleton {
    private static instance: Singleton|undefined = undefined;
    private constructor() {}
    static getInstance(): Singleton {
        if (Singleton.instance === undefined) 
            Singleton.instance = new Singleton();
        return Singleton.instance; 
    }
}

const s = Singleton.getInstance();
const t = Singleton.getInstance();
console.log(s === t);
