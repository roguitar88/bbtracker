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

/*
const lollipop = (something) => {
    return something;
}
*/

/*
// Getting current date
let nDate = new Date().toLocaleString('en-US', {
    timeZone: 'America/Sao_Paulo'
});
*/

let convertDateTime = (value) => {
    let year = new Date(value).getFullYear();
    let month = new Date(value).getMonth() + 1;
    let day = new Date(value).getDate();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    let second = new Date(value).getSeconds() < 10 ? '0' + new Date(value).getSeconds() : new Date(value).getSeconds();
    let minute = new Date(value).getMinutes() < 10 ? '0' + new Date(value).getMinutes() : new Date(value).getMinutes();
    let hour = new Date(value).getHours() < 10 ? '0' + new Date(value).getHours() : new Date(value).getHours();

    nDate = year + '-' + month + '-' + day;

    let nTime = hour + ':' + minute + ':' + second;

    let dateTime = day + '/' + month + '/' + year + ' às ' + hour + ':' + minute + 'h';

    return {n_date: nDate, n_time: nTime, date_time: dateTime};
}

// let curTime = convertDateTime(nDate).n_date + ' ' + convertDateTime(nDate).n_time;

module.exports = {
    checkPassword: checkPassword,
    convertDateTime: convertDateTime
    // lollipop: lollipop,
    // nDate: nDate,
    // curTime: curTime,
    // nTime: nTime,
    // dateTime: convertDateTime(nDate).date_time,
}