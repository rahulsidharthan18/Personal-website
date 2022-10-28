var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');


function nameValidation(){
    var name=document.getElementById('contact-name').value;
    if(name.length==0){
        nameError.innerHTML='name required';
        return false;
    }
        if(!name.match(/^[A-Za-z]+ [A-Za-z]+$/)){
            nameError.innerHTML= 'enter full name';
            return false;
            
            
        }
    else{
        nameError.innerHTML='valid name';
        return true;
    }
}
function emailValidation(){
    var email=document.getElementById('contact-email').value;
    if(!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
        emailError.innerHTML='enter a valid mail';
        return false;
    }else{
        emailError.innerHTML='valid email';
        return true;
    }
}
function messageValidation(){
    var message=document.getElementById('contact-message').value;
    if(message.length<30){
        messageError.innerHTML='min 30 characters required';
        return false
    }
    else{
        messageError.innerHTML='valid';
        return true;
    }
}
function validateForm(){
    if(!nameValidation() || !emailValidation() || !messageValidation()){
        submitError.innerHTML='please fix error to send form';
        return false
    }else{
        return true;
    }
}