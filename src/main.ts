// interface IUser
interface UserInterface {
    name: string;
    // ? ==> Not required 
    age?: number;

    getMessage():string;
}

const user: UserInterface = {
    name: 'John', 
    age: 3,
    getMessage() {
        return 'Hello' + this.name
    }
}

const user2: UserInterface = {
    name: 'Jack',
    getMessage() {
        return 'Hello' + name
    }
}

console.log(user2.getMessage());
