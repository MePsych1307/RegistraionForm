var nameerror=document.getElementById('name-error');
var phoneerror=document.getElementById('phone-error');
var mailerror=document.getElementById('mail-error');
var passerror=document.getElementById('pass-error');
var passcheck=document.getElementById('pass-check');
var pass;
function validatename(){
    var name = document.getElementById('name').value;
    if(name.length==0){
        nameerror.innerHTML='name is required';
        return false;
    }
    if(!name.match(/^[a-zA-z]*\s{1}[a-zA-Z]*$/)){
        nameerror.innerHTML='Enter full name';
        return false;
    }
    nameerror.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;
}

function validatephno(){
    var phoneno=document.getElementById('phno').value;
    if(phoneno.length==0){
        phoneerror.innerHTML='enter phone number';
        return false;
    }
    if(phoneno.length!==10){
        phoneerror.innerHTML='phone number must be 10 digits';
        return false;
    }
    if(!phoneno.match(/^[0-9]{10}$/)){
        phoneerror.innerHTML='only numbers';
        return false;
    }
    phoneerror.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;
}
function validateemail(){
    var email = document.getElementById('email').value;
    if(email.length==0){
        mailerror.innerHTML='Enter a valid Mail Id';
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        mailerror.innerHTML="enter a valid Mail id";
        return false;
    }
    mailerror.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;
}
function validatepass(){
    pass = document.getElementById('password').value;
    if(!pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)){
        passerror.innerHTML='Password must be atleast 8 characters <br> long ,1 uppercase,1 number';
        return false;
    }
    passerror.innerHTML='<i class="fa-solid fa-check"></i>';
    return true
}
function validaterepass() {
    var repass = document.getElementById('repassword').value;
    if (repass !== pass) {
        passcheck.innerHTML = 'Password Does Not Match';
        return false;
    }
    passcheck.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function submitForm() {
    if (validateemail() && validatename() && validatephno() && validatepass() && validaterepass()) {
        alert('Form submitted');
        var fullName = document.getElementById('name').value;
        var phoneNumber = document.getElementById('phno').value;
        var emailId = document.getElementById('email').value;
        var userPassword = pass;
        var userData = {
            fullName: fullName,
            phoneNumber: phoneNumber,
            emailId: emailId,
            password: userPassword
        };
        var jsonData = JSON.stringify(userData);
        console.log(jsonData);
        document.getElementById('RegistrationForm').reset();

        function resetForm() {
            document.getElementById('RegistrationForm').reset();
            nameerror.innerHTML = '';
            phoneerror.innerHTML = '';
            mailerror.innerHTML = '';
            passerror.innerHTML = '';
            passcheck.innerHTML = '';
        }
        resetForm();
        alert('Form submitted');
    } else {
        alert('Check the details entered');
    }
}