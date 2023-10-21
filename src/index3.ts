type Employee = {
    readonly id: number,
    name: string,
    age: number,
    address: string,
    retire: (date: Date) => void
}

let employee: Employee = {

    id: 1,
    name: 'Ali',
    age: 50,
    address: 'Hello World Street',
    retire: (date: Date) => { 
        console.log(date);
    } 
};
