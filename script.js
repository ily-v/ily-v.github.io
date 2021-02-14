function validate() {
    var username = document.getElementById('name-input').value;
    console.log(username);
    if (username == "Victor" || username == "victor" || username == "VICTOR") {
        document.getElementById('login-page').classList.add('disabled');
        document.getElementById('gallery-page').classList.add('enabled');
        return false;
    }
    else {
document.getElementById('warning').classList.add('enabled');
    }
    return false;
}

document.onkeyup = enter;    
function enter(e) {if (e.which == 13) validate();}
