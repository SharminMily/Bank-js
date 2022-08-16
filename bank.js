// step-1; add click even handler with submit button
document.getElementById('btn-submit') .addEventListener('click', function(){
    console.log('submit button clicked');
    //--- step-2; get the email adress inside the email input field----
    // ---  --- //
    // --- always remember to use .valu to get text from an input Filed --- //
    const emailField = document.getElementById('user-email')
    const email = emailField.value;
    // console.log(email);
    // --- step-3; get password --- //
    // 3.a set id on the html element
    // 3.b get the element
    // 3.c get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log ( email, password)
    // --- DANGER: do not veryfy email password on the client side ---//
    // -- step-4 verify email and password  and check whether valid user or not--- //
    if(email === 'santan@bap.com' && password === 'secret'){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }
})