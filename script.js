// selecting the elements

let inputPassword = document.getElementById('passwordInpt');
let output = document.getElementById('output');
let btn = document.getElementById('btn');
const strongPass = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

// creating a function for checking the password

function checkPass() {

    let password = inputPassword.value.trim();

    if (strongPass.test(password)) {
        output.textContent = '✅ Strong Password 💪'
        output.style.color = 'green';
    }
    else {
        output.textContent = '❌ Weak Password 🔓';
        output.style.color = 'red';
    }
};

// Adding an event listener to the button

btn.addEventListener('click', checkPass);


