function validate() {
    var username = document.getElementById('name-input').value;
    if (username == "Victor" || username == "victor" || username == "VICTOR") {
        document.getElementById('login-page').classList.add('disabled');
        return false;
    }
    else {
document.getElementById('warning').classList.add('enabled');
    }
    return false;
}