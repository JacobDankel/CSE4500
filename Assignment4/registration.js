var fname = "";
var lname = "";
var phone = "";
var email = "";
var dob = "";
var country = "";
var gender;

function submitNewUser(){
    fname = document.getElementById("fName").value;
    lname = document.getElementById("lName").value;
    phone = document.getElementById("phoneNum").value;
    email = document.getElementById("email").value;
    dob = document.getElementById("DOB").value;
    country = document.getElementById("country").value;
    gender = document.getElementsByName('gender');

    //Showing Confirmation Box

    var confirmationDiv = document.getElementById("confirmation");
    if(confirmationDiv.style.display === "none"){
        confirmationDiv.style.display = "block";
    }

    //Populating box with inputs

    document.getElementById("fNameResult").innerHTML = fname;
    document.getElementById("lNameResult").innerHTML = lname;
    document.getElementById("phoneNumResult").innerHTML = phone;
    document.getElementById("emailResult").innerHTML = email;
    document.getElementById("DOBResult").innerHTML = dob;
    document.getElementById("countryResult").innerHTML = country;

    for(i = 0; i < gender.length; i++) {
        if(gender[i].checked)
        document.getElementById("genderResult").innerHTML
                = gender[i].value;
    }
}

function confirmUser() {

    // DB Implementation goes here

    clearInputs();
}

// If user cancels, hide Confirmation box && clear inputs

function cancelInputs() {
    var confirmationDiv = document.getElementById("confirmation");
    if(confirmationDiv.style.display === "block")
        confirmationDiv.style.display = "none";

    clearInputs();
}

// Clears user inputs

function clearInputs() {
    document.getElementById("fName").value = "";
    document.getElementById("lName").value  = "";
    document.getElementById("phoneNum").value  = "";
    document.getElementById("email").value  = "";
    document.getElementById("DOB").value  = "";
    document.getElementById("country").value  = "";
    
    var gender = document.getElementsByName('gender');
    for(i = 0; i < gender.length; i++) {
        if(gender[i].checked)
            gender[i].checked = false;
    }
}

function validate(){
    var status = false;
    if(fname.length<1){
        document.getElementById("fnameloc").innerText="Please enter your name";
        status=false;
    } else {
        document.getElementById("fnameloc").innerText="";
        status=true;
    }
    allLetters();
    allDigits();
}

function allLetters(){
    var letters = /^[A-Za-z]+$/;
    if(document.getElementById("fNameResult").value.match(letters)){
        return true;
    } else {
        document.getElementById("fnameloc").innerHTML="Your name should be all character values.";
        return false;
    }
}

function allDigits(){
    var numbers = /^[0-9]+$/;

    if(document.getElementById("phoneNumResult").value.match(numbers)){
        return true;
    } else {
        document.getElementById("phoneloc").innerHTML="Your value should be all digits.";
        return false;
    }
}

function allDigits(){
    var phoneno = /^\(?([0-9]{3})\)?[-.* ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(document.getElementById("phoneNumResult").value.match(phoneno)){
        return true;
    } else {
        document.getElementById("phoneloc").innerHTML="Your phone number should be all digits.";
        return false;
    }
}
