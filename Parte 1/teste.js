const users = [
    { name: 'Anna', id: '1', isActive: true },
    { name: 'Dave', id: '2', isActive: true },
    { name: 'Beatrice', id: '3', isActive: true },
    { name: 'Charles', id: '4', isActive: false }
];

let active_users = [];


users.sort((a, b) => a.name.localeCompare(b.name));

users.forEach(user => {
    if (user.isActive === true) {
        active_users.push(user);
    }
});

console.log(active_users);