function submitNewUser(){
    var fname = document.getElementById("fName").value;
    var lname = document.getElementById("lName").value;
    var phone = document.getElementById("phoneNum").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("DOB").value;
    var country = document.getElementById("country").value;
    var gender = document.getElementsByName('gender');

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