document.getElementById('loginForm').addEventListener('submit',function(event){
    event.preventDefault();

    const username=document.getElementById('username');
    const password=document.getElementById('password');

    
    const usernameValue=username.value.trim();
    const passwordValue=password.value.trim();

    if(usernameValue === ''){
        setError(username,'username cannot be empty')
    }else if(usernameValue.length<5 || usernameValue.length>15){
       setError (username,"username must be between 5 and 15 characters");
    }
    else
    {
        setSuccess(username);
    }

    if(passwordValue===''){
        setError(password,'password cannot be empty');
    }
    else if(passwordValue.length<8){
        setError(password,"password should atleast 8 characters");
    }
    else
    {
        setSuccess(password);
    }

    if(usernameValue !=='' && passwordValue !==''){
        alert('login successful');
    }

});

function setError(element,message){
    const formGroup=element.parentElement;
    formGroup.className='form-group error';
    const small=formGroup.querySelector('small');
    small.textContent=message;
}

function setSuccess(element){
    const formGroup=element.parentElement;
    formGroup.className='form-group Success';
}