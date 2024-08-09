function validation() {
    var name = document.getElementById("example").value;
    var email = document.getElementById("input").value;
    var number = document.getElementById("1").value;
    var password = document.getElementById("2").value;
    var Cpassword = document.getElementById("3").value;
    // We use var means variable because everything will be different according to user.
    // we again have to use var because we have to give permission that what all things will be allowed in name,email,password and numbers.

    // Permissions

    var namecheck = /^[A-Za-z ]{2,}$/;
    // This is the format for permission and we can't use same name in permission and above that we have use like in email section we have use email then in permission section we have to use another name.
    // This 2, inside the curly brackets denotes the min and max characters in name column. Therefore we can only decide min characters not max hence max is left empty.
    var emailcheck= /^[A-Za-z0-9._]{2,}@[A-Za-z0-9]{2,}[.]{1}[A-Za-z]{2,6}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck=/^[6789][0-9]{9}$/;
    // Any Indian number will start with either 6,7,8,9 it is fixed.
    var passwordcheck=/^[A-Za-z0-9!@#$%&*._]{8,16}$/
    
    // for checking the permissions, that whether it has fulfill the permissions or not, we will use loop.

    if(namecheck.test(name)){
        document.getElementById("error-name").innerHTML="";
    }
    else{
        document.getElementById("error-name").innerHTML="Use only alphabets";
        return false;
        // We have to write the id of span tag in elementid and in else condition which is for false we have to give message to user and write return false so that user will not be able to submit the form. 
    }
    if(emailcheck.test(email)){
        document.getElementById("error-").innerHTML="";
    }
    else{
        document.getElementById("error-").innerHTML="use only alphabets,numbers and special characters";
        return false;
    }
    if(numbercheck.test(number)){
        document.getElementById("error-n").innerHTML="";
    }
    else{
        document.getElementById("error-n").innerHTML="Type 10 digit number starting with either 6,7,8 or 9.";
        return false
    }
    if(passwordcheck.test(password)){
        document.getElementById("error-na").innerhTML="";
    }
    else{
        document.getElementById("error-na").innerHTML="Minimum 8 characters are required and use atleast one special character in password";
        return false;
    }
    if(Cpassword.match(passwordcheck)){
        document.getElementById("error-nam").innerHTML="";
    }
    else{
        document.getElementById("error-nam").innerHTML="Password does not match!";
        return false
    }
}

// 25/12/2023

