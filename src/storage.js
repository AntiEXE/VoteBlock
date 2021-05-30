// const createAccount = document.getElementById("CreateAccount");
// const Name = document.getElementById("Name");
// const Email = document.getElementById("Email");

let users= [];
var k= 0;
const addUser = (ev) =>{
    ev.preventDefault(); 
    let user={
        id: Date.now(),
        index: k,
        Name: document.getElementById('Name').value,
        Email: document.getElementById('Email').value
    }
    users.push(user);
    k++;
    document.forms[0].reset();
    console.warn('added', (users));
    console.log(users)

    //save
    localStorage.setItem('Users', JSON.stringify(users));
    console.log(users[0]["id"]);
}


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addUser);
});