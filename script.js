"use-strict";
window.addEventListener("DOMContentLoaded", generateOutput);

function generateOutput() {
    console.log("generateOutput");
    const generateBtn = document.getElementById("generateOutput");
    generateBtn.addEventListener('click', handleClick);
}

function handleClick() {
    console.log("handleClick");

    const input = document.getElementById("input"); // read input
    const output = document.getElementById("output"); // assign output

    // Generate output depending on the option chosen
    const options = document.getElementById("options");
    switch(options.value) {
    case "1":
        option1(input, output);
        break;
    case "2":
        option2(input, output);
        break;
    case "3":
        option3(input, output);
        break;
    case "4":
        option4(input, output);
        break;
    case "5":
        option5(input, output);
        break;
    case "6":
        option6(input, output);
        break;
    case "7":
        option7(input, output);
        break;
    case "8":
        option8(input, output);
        break;
    }
}

// Capitalizes only the first letter of the first name
function option1(input, output) {
    console.log("option1");
    output.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
}

// Obtains the first name
function option2(input, output) {
    console.log("option2");
    output.value = input.value.substring(0, input.value.indexOf(' '));
}

// Obtains the length of the first name
function option3(input, output) {
    console.log("option3");
    output.value = 'First name has ' + input.value.indexOf(' ') + ' characters';
}

// Obtains the middle name, where it starts and where it ends
function option4(input, output) {
    console.log("option4");
    output.value = 'The middle name is ' + input.value.substring(input.value.indexOf(' '), input.value.lastIndexOf(' ')) + ', starts at ' + (input.value.indexOf(' ')+1) + ' and ends at ' + (input.value.lastIndexOf(' ')-1);
}

// Finds if a filename ends in .jpg or .png
function option5(input, output) {
    console.log("option5");
    if (input.value.endsWith(".jpg")) {
        output.value = 'File is .jpg or .png';
    }else {
        output.value = 'File is not .jpg or .png';
    }
}

// Hides a password with the exact number of *
function option6(input, output) {
    console.log("option6");
    output.value = '*'.repeat(input.value.length);
}

// Capitalizes the first character of every word
function option7(input, output) {
    console.log("option7");
    var words = input.value.toLowerCase().split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].substring(0).slice(0, 2) + words[i].charAt(2).toUpperCase() + words[i].substring(3);
    }
   output.value = words.join(' ');
}

// Capitalizes a character if it follows a space or a hyphen
function option8(input, output) {
    console.log("option8");
    var words = input.value.toLowerCase().split(/[ -]+/);
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);     
    }
    output.value = words.join(' ');
}
