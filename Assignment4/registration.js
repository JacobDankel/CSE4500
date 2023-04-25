var fname = "";
var lname = "";
var phoneno = "";
var email = "";
var dob = "";
var country = "";
var gender;

function submitNewUser(){
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    phoneno = document.getElementById("phoneNum").value;
    email = document.getElementById("email").value;
    dob = document.getElementById("DOB").value;
    country = document.getElementById("country").value;
    gender = document.getElementsByName('gender');

    showConfirmationBox();

    //Populating box with inputs

    document.getElementById("fNameResult").innerHTML = fname;
    document.getElementById("lNameResult").innerHTML = lname;
    document.getElementById("phoneNumResult").innerHTML = phoneno;
    document.getElementById("emailResult").innerHTML = email;
    document.getElementById("DOBResult").innerHTML = dob;
    document.getElementById("countryResult").innerHTML = country;

    for(i = 0; i < gender.length; i++) {
        if(gender[i].checked)
        document.getElementById("genderResult").innerHTML
                = gender[i].value;
    }

    validate();
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
    document.getElementById("fname").value = "";
    document.getElementById("lname").value  = "";
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
        var status=false;
        //Name Check
        allLetters("fname");
        if(fname.length<1){
            document.getElementById("fnameloc").innerText=" Please enter your first name";
            status=false;
        } else {
            document.getElementById("fnameloc"). innerText ="";
            status=true;
        }

        allLetters("lname");
        if(lname.length<1){
            document.getElementById("lnameloc").innerText=" Please enter your last name";
            status=false;
        } else {
            document.getElementById("lnameloc"). innerText ="";
            status=true;
        }
        //Phone Check
        phoneCheck();
        if(phoneno.length<1){
            document.getElementById("phoneloc").innerText=" Please enter your phone number";
            status=false;
        } else {
            document.getElementById("phoneloc"). innerText ="";
            status=true;
        }
        //Email Check
        if(email.length<1){
            document.getElementById("emailloc").innerText=" Please enter an email address";
            status=false;
        } else {
            document.getElementById("emailloc"). innerText ="";
            status=true;
        }
        //Date of Birth Check
        if(dob.length<1){
            document.getElementById("DOBloc").innerText=" Please enter your DOB";
            status=false;
        } else {
            document.getElementById("DOBloc"). innerText ="";
            status=true;
        }
        //Country Check
        if(country.length<1){
            document.getElementById("countryloc").innerText=" Please select a country";
            status=false;
        } else {
            document.getElementById("countryloc"). innerText ="";
            status=true;
        }

        for(i = 0; i < gender.length; i++) {
            if(gender[i].checked){
                document.getElementById("genderloc"). innerText ="";
                status=true;
                console.log("Gender checked");
                break;
            } else {
                document.getElementById("genderloc"). innerText ="Please select a gender";
                status=false;
                console.log("Gender not checked");
            }
        }


        if(status){
            showConfirmationBox();
        } else {
            hideConfirmationBox();
        }
        return status;
}

function allLetters(element){
    var letters = /^[A-Za-z]+$/;
    if(document.getElementById(element).value.match(letters)){
        return true;
    } else {
        document.getElementById(element + "loc").innerHTML="Your name should be all character values.";
        return false;
    }
}

function allDigits(element){
    var numbers = /^[0-9]+$/;

    if(document.getElementById("element").value.match(numbers)){
        return true;
    } else {
        document.getElementById(element + "loc").innerHTML="Your value should be all digits.";
        return false;
    }
}

function phoneCheck(){
    var phoneno = /^\(?([0-9]{3})\)?[-.* ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(document.getElementById("phoneNum").value.match(phoneno)){
        return true;
    } else {
        document.getElementById("phoneloc").innerHTML="Your phone number should be all digits.";
        return false;
    }
}

function showConfirmationBox(){
        var confirmationDiv = document.getElementById("confirmation");
        if(confirmationDiv.style.display === "none"){
            confirmationDiv.style.display = "block";
        }
}

function hideConfirmationBox(){
    var confirmationDiv = document.getElementById("confirmation");
    if(confirmationDiv.style.display === "block"){
        confirmationDiv.style.display = "none";
    }
}