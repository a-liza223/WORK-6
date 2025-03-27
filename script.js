let people = [
    { name: "Анна", age: 25 },
    { name: "Иван", age: 32 },
    { name: "Ольга", age: 19 }
];

people.sort((a, b) => a.age - b.age);

let sortedPeople = document.getElementById('sortedPeople');

people.forEach(person => {
    let li = document.createElement('li');
    li.textContent = `${person.name}, возраст: ${person.age}`;
    sortedPeople.appendChild(li);
});