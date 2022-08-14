console.log('Howdy Marcus!');


const myBtn = document.getElementById('myBtn');

// console.log(myBtn);

myBtn.addEventListener("click", () => myBtn.style.backgroundColor = 'rgb(77, 139, 197)' );

    
    // const name = prompt('What is your name ?');
    // document.body.innerHTML = ('<h1> ' + name + '</h1>') ;

    const record = document.getElementById('rcdBtn');
    record.addEventListener("click", () => record.style.backgroundColor = 'green');

    const play = document.getElementById('plyBtn');
    play.addEventListener("click", () => play.style.backgroundColor = 'blue');

    const erase = document.getElementById('delBtn');
    erase.addEventListener("click", () => erase.style.backgroundColor = 'black');

    // const square = document.getElementsById('square');
    // square.addEventListener("click", () => square.style.backgroundColor = 'rgb(77, 139, 197)')

    const newBtn = document.getElementById('new');
    newBtn.addEventListener("click", () => newBtn.style.backgroundColor = 'gold');

    const butn = document.getElementById('anotherButton');
    butn.addEventListener("click", () => butn.style.backgroundColor = 'blue');
    butn.addEventListener("dblclick", () => butn.style.backgroundColor = 'teal');
   







console.log('Howdy');

let person = {
    firstName : "Marco",
    lastName : "Moya",
    age : 25,

    address: {
        state: 'Texas',
        apt: 701,
        zip : 78741,
    }

};
 
console.log(person.address.zip);
console.log(person.age)

let nums= [
    1,
    2,
    3,
    4,
    5
];

console.log(nums[2]);