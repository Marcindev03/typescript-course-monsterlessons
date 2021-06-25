const doSomething = (): void => {
    console.log('Hello world');
};

const someFunction = (): never => {
    throw 'never';
};

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
// let s2: string = vUnknown;

console.log(vAny.foo());
// console.log(vUnknown.foo());

