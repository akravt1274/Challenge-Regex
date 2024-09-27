// define the regex pattern for a valid email address
const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i; // i means case-insensitive

function submitHandler(event) {
    event.preventDefault();   
   
    $('#error').text("");
    const email = $('#email').val();    
    
    if (regex.test(email)) {      
         $('#error').text("");
        $('#success').text('Email is valid!');
    } else {
        $('#success').text("");
        $('#error').text('Invalid email address.');
    }
   
}

$(document).ready(function () {   
    $('#error').text("");
     $('.submit').on('submit', submitHandler);
});