/// Readonly Type
/// When you have a configuration object that should not altered after intialization, making it Readonly emsures its properties cannot be changed.

interface Config{
    readonly name: string;
    readonly age: number;
}

const a :Readonly<Config>={
    name: 'John',
    age: 30
}

// a.name='john'  

///error : Cannot assign to name it is readonlt properties