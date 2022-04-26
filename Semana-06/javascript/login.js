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

    var eValue = document.getElementById('email').value;

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
        };

    };

    function focusEmail () {
        var warning = document.getElementById('errorText');
        warning.firstElementChild.textContent = '';
    };

    function blurPassword () {
        if (validatePassword(document.getElementById('password').value)) {
            password.style.border = 'solid 3px #008000';
            passwordBool = true;
        } else {
            var warning = document.getElementById('errorText2');
            warning.firstElementChild.textContent ='The password is invalid.';
            warning.style.color = '#FF0000';
            password.style.border = '3px solid  #FF0000';
            passwordBool = false;
        };
    };

    function focusPassword () {
        var warning = document.getElementById('errorText2');
        warning.firstElementChild.textContent = '';
    };
    
    
    function validateEmail () {
        var expReg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (email.value.match(expReg)){
            return true;
        } else {
            return false;
        }
     
    }

    function validatePassword(eValue) {
        var numberBool = false;
        var spcharBool = false;
        var alphBool = false;

        for (var c = 0; c < eValue.length; c++) {
            for (let i = 0; i < spchar.length; i++) {
                if (eValue [c] == spchar [i]) {
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

        for (var j = 0; j < eValue.length; j++) {
            if (!numberBool) {
                for (let k = 0; k < number.length; k++) {
                    if (eValue [j] == number [k]) {
                        numberBool = true;
                        break;
                    }
                }
            }

            if (!alphBool) {
                for (let a = 0; a < number.length; a++) {
                    if (eValue [j] == alph [a]) {
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
        var msg = '';
        var newMsg = `\r\n`;
        msg = 'The data entered: ';

        if (emailBool && passwordBool) {
            msg += 'correct:' + newMsg + 'User email: ' + document.getElementById('email').value
            + newMsg + 'Password: ' + document.getElementById('password').value;
        } else {
            msg += 'Incorrect. Check the next items; ';
            if (!emailBool) {
                msg += newMsg + 'Enter a valid email.';
            }
            if (!passwordBool) {
                msg += newMsg + 'Enter a valid password.';
            }
        }

        window.alert(msg); 
    }

   


   
}

