window.onload = function () {

    var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var alph = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var spchar = ['+', '-', '_', '@', '*'];

    var emailBool = false, passwordBool = false;
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var continueBtn = document.getElementById('continue');

    email.addEventListener('focus', focusEmail);
    email.addEventListener('blur', blurEmail);
    password.addEventListener('focus', focusPassword);
    password.addEventListener('blur', blurPassword);
    continueBtn.addEventListener('click', continueClick);

    function blurEmail() {
        if (validateEmail()) {
            email.style.border = 'solid 3px #008000';
            emailBool = true;
        } else {
            var warning = document.getElementById('errorText');
            warning.firstElementChild.textContent ='The email is invalid.';
            warning.style.color = '#FF0000';
            email.style.border = '3px solid  #FF0000';
            emailBool = false;
        }

    }

    function focusEmail () {
        var warning = document.getElementById('errorText');
        warning.firstElementChild.textContent = '';
    }

    function blurPassword () {
        if (validatePassword()) {
            password.style.border = 'solid 3px #008000';
            passwordBool = true;
        } else {
            var warning = document.getElementById('errorText2');
            warning.firstElementChild.textContent ='The password is invalid.';
            warning.style.color = '#FF0000';
            password.style.border = '3px solid  #FF0000';
            passwordBool = false;
        }
    }

    function focusPassword () {
        var warning = document.getElementById('errorText2');
        warning.firstElementChild.textContent = '';
    }
    
    
    function validateEmail () {
        var expReg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (email.value.match(expReg)){
            return true;
        } else {
            return false;
        }
     
    }

    function validatePassword() {
        var numberBool = false;
        var spcharBool = false;
        var alphBool = false;
        var pValue = document.getElementById('password').value

        for (var c = 0; c < pValue.length; c++) {
            for (let i = 0; i < spchar.length; i++) {
                if (pValue [c] == spchar [i]) {
                    spcharBool = true;
                    break;
                }
            }

            if (spcharBool) {
                break;
            }
        }

        if (spcharBool) {
            return false;
        }

        for (var j = 0; j < pValue.length; j++) {
            if (!numberBool) {
                for (let k = 0; k < number.length; k++) {
                    if (pValue [j] == number [k]) {
                        numberBool = true;
                        break;
                    }
                }
            }

            if (!alphBool) {
                for (let a = 0; a < number.length; a++) {
                    if (pValue [j] == alph [a]) {
                        alphBool = true;
                        break;
                    }
                }
            }

            if (numberBool && alphBool) {
                break;
            }
        }

        if (numberBool && alphBool) {
            return true;
        } else {
            return false;
        }
     
    }

    function continueClick (e) {
        e.preventDefault ();
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?';
        var queryParams = `email=${email.value}&password=${password.value}`;
        fetch(`${url}${queryParams}`)
        .then(res => res.json())
        .then(json => {
            var msgT = '';
            var newMsg = `\r\n`;
            msgT += json.msg 
            + newMsg + 'User email: ' + document.getElementById('email').value
            + newMsg + 'Password: ' + document.getElementById('password').value;
            alert(msgT);
        })
        .catch( error => {
            var msg = '';
            var newMsg = `\r\n`;
            msg <= error.errors[0].msg;
            msg += '' 
            + newMsg + 'User email: ' + document.getElementById('email').value
            + newMsg + 'Password: ' + document.getElementById('password').value;
            alert(msg)
        })
         
        
    }
}


    



