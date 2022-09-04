const checkPassword = (inputtxt) => { 
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    // var paswd=  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    if(inputtxt.match(paswd)) {
        // alert('Correct, try another...');
        return true;
    } else { 
        // alert('Wrong...!');
        return false;
    }
}

const lollipop = (something) => {
    return something;
}

module.exports = {
    checkPassword: checkPassword,
    lollipop: lollipop
}