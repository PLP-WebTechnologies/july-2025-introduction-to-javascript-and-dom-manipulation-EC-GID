// Part 1: Variable declarations and conditionals
var form = document.querySelector('form');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');
var fieldSelect = document.getElementById('field');

// Part 4: DOM interactions (3 examples)
// 1. Change header background on click
var header = document.querySelector('header');
header.onclick = function() {
    if (header.style.backgroundColor == 'rgb(11, 61, 46)') {
        header.style.backgroundColor = '#14532d';
    } else {
        header.style.backgroundColor = '#0b3d2e';
    }
};

// 2. Add text to main section
var main = document.querySelector('main');
var newText = document.createElement('p');
newText.textContent = 'Thanks for visiting my page!';
main.appendChild(newText);

// 3. Change button color on hover
var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onmouseover = function() {
        this.style.backgroundColor = '#047857';
    };
    buttons[i].onmouseout = function() {
        this.style.backgroundColor = '#059669';
    };
}

// Part 2: Custom functions
function validateEmail(email) {
    if (email.includes('@') && email.includes('.')) {
        return true;
    } else {
        return false;
    }
}

function showMessage() {
    alert('Form submitted successfully!');
}

// Part 3: Loop examples
// Loop 1: Add numbers to hobbies list
var hobbyItems = document.querySelectorAll('section ul li');
for (var i = 0; i < hobbyItems.length; i++) {
    hobbyItems[i].innerHTML = (i + 1) + '. ' + hobbyItems[i].innerHTML;
}

// Loop 2: Change color of table rows
var tableRows = document.querySelectorAll('tbody tr');
var j = 0;
while (j < tableRows.length) {
    if (j % 2 == 0) {
        tableRows[j].style.backgroundColor = '#788a81';
    }
    j++;
}

// Form submission
form.onsubmit = function(e) {
    e.preventDefault();
    
    // Part 1: Conditionals
    if (validateEmail(emailInput.value)) {
        showMessage();
    } else {
        alert('Please enter a valid email');
    }
};

// Part 2: Second custom function
function changeImageSize() {
    var images = document.querySelectorAll('img');
    for (var k = 0; k < images.length; k++) {
        images[k].style.border = '3px solid #14532d';
    }
}

// Call the function
changeImageSize();