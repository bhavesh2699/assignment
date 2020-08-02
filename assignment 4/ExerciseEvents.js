/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
  
*/
function addLabel() { 
    document.getElementById('uname').innerHTML = 'Username'; 
    document.getElementById('pass').innerHTML = 'Password'; 
    document.getElementById('cnf_pass').innerHTML = 'Confirm Password'; 
} 
addLabel();

/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/
document.getElementById("mySubmit").disabled = true;

function submit(){
    const uname = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const cnf_pass = document.getElementById('confirmPassword').value;

    if(uname === ''){
        event.preventDefault();
        document.getElementById('val_uname').innerHTML = 'Enter Username !!!';
    }
    else{
        document.getElementById('val_uname').innerHTML = ''; 
    }

    if(pass === ''){
        event.preventDefault();
        document.getElementById('val_pass').innerHTML = 'Enter Password !!!'; 
    }
    else{
        document.getElementById('val_pass').innerHTML = ''; 
    }

    if(cnf_pass === ''){
        event.preventDefault();
        document.getElementById('val_cnf_pass').innerHTML = 'Confirm Password !!!'; 
    }

    /*
    Exercise 03
    -----------
    Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
    */
    else if(pass != cnf_pass){
        event.preventDefault();
        document.getElementById('val_cnf_pass').innerHTML = 'Password does not match !!!'; 
    }
    /*
    Exercise 04
    -----------
    Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
    */
    else{
        document.getElementById('val_cnf_pass').innerHTML = ''; 
        document.getElementById("mySubmit").disabled = false;
    }
}
/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/
function submission(){
    window.alert("User Registration Successful !")
}