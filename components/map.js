const people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Doe', age: 40 }
];

// Create a new array of names
const names = people.map(function(person) {
    return person.name;
});

console.log(names); // Output: ['John', 'Jane', 'Doe']
