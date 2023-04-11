var maindiv = document.querySelector('.main div[name="user"]');

maindiv.remove();

var myName = 'Cass';

var nameClone = myName;
nameClone = 'Shady';

console.log(myName);
console.log(nameClone);

var user = {
    name: 'Cass',
    age: 26
}

console.log(user);

var userClone = user;

userClone.age = 10;

console.log(user);


