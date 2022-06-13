interface Light {
    next(): Light;
    str(): string;
}

class Red implements Light {
    private static color = 'Red';
    private static instance: Red|undefined = undefined;
    private constructor() {}
    
    static getInstance(): Red {
        if (Red.instance == undefined) 
            Red.instance = new Red();
        return Red.instance;
    }
    next(): Light { return Green.getInstance(); }
    str(): string { return Red.color; }
}

class Green implements Light {
    private static color = 'Green';
    private static instance: Green|undefined = undefined;
    private constructor() {}

    static getInstance(): Green {
        if (Green.instance == undefined)
            Green.instance = new Green();
        return Green.instance;
    }
    next(): Light { return Yellow.getInstance(); }
    str(): string { return Green.color; }
}

class Yellow implements Light {
    private static color = 'Yellow';
    private static instance: Yellow|undefined = undefined;
    private constructor() {}
    static getInstance(): Yellow {
        if (Yellow.instance == undefined) 
            Yellow.instance = new Yellow();
        return Yellow.instance;
    }
    next(): Light { return Red.getInstance(); }
    str(): string { return Yellow.color; }
}


let light = Red.getInstance();
for (let i = 0; i < 10; ++i) {
    console.log(light.str());
    light = light.next();
}
