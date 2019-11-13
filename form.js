//set up variables

let name = document.getElementById('name');
let seccondname = document.getElementById('surname');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let msg = document.getElementById('message');
let submit = document.getElementById('submit');

//import fs libary
const fs = require('fs');

function add(){
    let arr = [];
    arr.push('FirstName ');
    arr.push(name);
    arr.push(surname);
    alert('a');
    fs.writeFile('test.txt',arr, function(err){
        if(err) throw err;
    })
}

submit.addEventListener('click', add);