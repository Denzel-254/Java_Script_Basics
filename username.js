// selecting elements needed

const nameInpt = document.getElementById('nameInpt');
const btn = document.getElementById('btn');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
const output3 = document.getElementById('output3');
const output = document.getElementById('output');


// creating a function to clear the output

function clearOutput() {
    output.textContent = '';
    output1.textContent = 'Enter name first';
    output2.textContent = '';
    output3.textContent = '';
    output1.style.color = 'grey';
    nameInpt.value = '';
};

// creating a function that generates random usernames


function generateUserName() {


    let userNameInpt = nameInpt.value.trim().toLowerCase();
    const randomNum1 = Math.floor(Math.random() * 10);
    const randomNum2 = Math.floor(Math.random() * 50);
    const randomNum3 = Math.floor(Math.random() * 100);

    if (userNameInpt === '') {

        clearOutput();

    } else {

        output.textContent = 'Choose from the three';
        output.style.fontWeight = 'bold';
        output1.textContent = `${userNameInpt}.${randomNum1}`;
        output2.textContent = `${userNameInpt}_${randomNum2}`;
        output3.textContent = `${userNameInpt[0]}.${userNameInpt}_${randomNum3}`;

        output1.style.color = 'red';
        output2.style.color = 'orange';
        output3.style.color = 'green';
        nameInpt.value = '';
    }
};

// Adding an event listener to the button that will call the function



btn.addEventListener('click', generateUserName);




// Adding an event listener to the enter key in the keyboard


nameInpt.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        generateUserName();
    }
});