window.onload = function () {
    var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var spchar = ['+', '-', '_', '@', '*'];

    var emailBool = false, passwordBool = false,
    firstNameBool = false, surnameBool = false,
    dnaBool = false, dateBirthBool = false,
    phoneBool = false, adressBool = false, 
    cityBool = false, pcBool = false,
    pass2Bool = false;
    var firstName = document.getElementById('firstName');
    var surname = document.getElementById('surname');
    var dna = document.getElementById('dna');
    var dateBirth = document.getElementById('dateBirth');
    var phone = document.getElementById('phone');
    var adress = document.getElementById('adress');
    var city = document.getElementById('city');
    var postCode = document.getElementById('postCode');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var repPass = document.getElementById('repPass');
    var continueBtn = document.getElementById('continue');

    firstName.addEventListener('focus', focusFirstName);
    firstName.addEventListener('blur', blurFirstName);
    surname.addEventListener('focus', focusSurname);
    surname.addEventListener('blur', blurSurname);
    dna.addEventListener('focus', focusDna);
    dna.addEventListener('blur', blurDna);
    dateBirth.addEventListener('focus', focusDateBirth);
    dateBirth.addEventListener('blur', blurDateBirth);
    phone.addEventListener('focus', focusPhone);
    phone.addEventListener('blur', blurPhone);
    adress.addEventListener('focus', focusAdress);
    adress.addEventListener('blur', blurAdress);
    city.addEventListener('focus', focusCity);
    city.addEventListener('blur', blurCity); 
    postCode.addEventListener('focus', focusPostCode);
    postCode.addEventListener('blur', blurPostCode);
    email.addEventListener('focus', focusEmail);
    email.addEventListener('blur', blurEmail);
    password.addEventListener('focus', focusPassword);
    password.addEventListener('blur', blurPassword);
    repPass.addEventListener('focus', focusRepPass);
    repPass.addEventListener('blur', blurRepPass);
    continueBtn.addEventListener('click', continueClick);

    var eValue = document.getElementById('email').value;

    function blurFirstName() {
        if (validateFirstName()) {
            firstName.style.border = 'solid 3px #008000';
            firstNameBool = true;
        } else {
            var warning = document.getElementById('errorText');
            warning.firstElementChild.textContent ='The name is invalid.';
            warning.style.color = '#FF0000';
            firstName.style.border = '3px solid  #FF0000';
            firstNameBool = false;
        };

    };

    function focusFirstName () {
        var warning = document.getElementById('errorText');
        warning.firstElementChild.textContent = '';
    };

    function blurSurname() {
        if (validateSurname()) {
            surname.style.border = 'solid 3px #008000';
            surnameBool = true;
        } else {
            var warning = document.getElementById('errorText2');
            warning.firstElementChild.textContent ='The surname is invalid.';
            warning.style.color = '#FF0000';
            surname.style.border = '3px solid  #FF0000';
            surnameBool = false;
        };

    };

    function focusSurname () {
        var warning = document.getElementById('errorText2');
        warning.firstElementChild.textContent = '';
    };

    function blurDna() {
        if (validateDna()) {
            dna.style.border = 'solid 3px #008000';
            dnaBool = true;
        } else {
            var warning = document.getElementById('errorText3');
            warning.firstElementChild.textContent ='The dna is invalid.';
            warning.style.color = '#FF0000';
            dna.style.border = '3px solid  #FF0000';
            dnaBool = false;
        };

    };

    function focusDna () {
        var warning = document.getElementById('errorText3');
        warning.firstElementChild.textContent = '';
    };

    function blurDateBirth() {
        if (validateDateBirth()) {
            dateBirth.style.border = 'solid 3px #008000';
            dateBirthBool = true;
        } else {
            var warning = document.getElementById('errorText4');
            warning.firstElementChild.textContent ='The date is invalid.';
            warning.style.color = '#FF0000';
            dateBirth.style.border = '3px solid  #FF0000';
            dateBirthBool = false;
        };

    };

    function focusDateBirth () {
        var warning = document.getElementById('errorText4');
        warning.firstElementChild.textContent = '';
    };

    function blurPhone() {
        if (validatePhone()) {
            phone.style.border = 'solid 3px #008000';
            phoneBool = true;
        } else {
            var warning = document.getElementById('errorText5');
            warning.firstElementChild.textContent ='The phone is invalid.';
            warning.style.color = '#FF0000';
            phone.style.border = '3px solid  #FF0000';
            phoneBool = false;
        };

    };

    function focusPhone () {
        var warning = document.getElementById('errorText5');
        warning.firstElementChild.textContent = '';
    };

    function blurAdress() {
        if (validateAdress()) {
            adress.style.border = 'solid 3px #008000';
            adressBool = true;
        } else {
            var warning = document.getElementById('errorText6');
            warning.firstElementChild.textContent ='The name is invalid.';
            warning.style.color = '#FF0000';
            adress.style.border = '3px solid  #FF0000';
            adressBool = false;
        };

    };

    function focusAdress () {
        var warning = document.getElementById('errorText6');
        warning.firstElementChild.textContent = '';
    };

    function blurCity() {
        if (validateCity()) {
            city.style.border = 'solid 3px #008000';
            cityBool = true;
        } else {
            var warning = document.getElementById('errorText7');
            warning.firstElementChild.textContent ='The city is invalid.';
            warning.style.color = '#FF0000';
            city.style.border = '3px solid  #FF0000';
            cityBool = false;
        };
    };

    function focusCity () {
        var warning = document.getElementById('errorText7');
        warning.firstElementChild.textContent = '';
    };

    function blurPostCode() {
        if (validatePostCode()) {
            postCode.style.border = 'solid 3px #008000';
            pcBool = true;
        } else {
            var warning = document.getElementById('errorText8');
            warning.firstElementChild.textContent ='The post code is invalid.';
            warning.style.color = '#FF0000';
            postCode.style.border = '3px solid  #FF0000';
            pcBool = false;
        };

    };

    function focusPostCode () {
        var warning = document.getElementById('errorText8');
        warning.firstElementChild.textContent = '';
    };


    function blurEmail() {
        if (validateEmail()) {
            email.style.border = 'solid 3px #008000';
            emailBool = true;
        } else {
            var warning = document.getElementById('errorText9');
            warning.firstElementChild.textContent ='The email is invalid.';
            warning.style.color = '#FF0000';
            email.style.border = '3px solid  #FF0000';
            emailBool = false;
        };

    };

    function focusEmail () {
        var warning = document.getElementById('errorText9');
        warning.firstElementChild.textContent = '';
    };

    function blurPassword () {
        if (validatePassword(document.getElementById('password').value)) {
            password.style.border = 'solid 3px #008000';
            passwordBool = true;
        } else {
            var warning = document.getElementById('errorText10');
            warning.firstElementChild.textContent ='The password is invalid.';
            warning.style.color = '#FF0000';
            password.style.border = '3px solid  #FF0000';
            passwordBool = false;
        };
    };

    function focusPassword () {
        var warning = document.getElementById('errorText10');
        warning.firstElementChild.textContent = '';
    };

    function blurRepPass() {
        if (validateRepPass()) {
            repPass.style.border = 'solid 3px #008000';
            pass2Bool = true;
        } else {
            var warning = document.getElementById('errorText11');
            warning.firstElementChild.textContent ='The password is invalid.';
            warning.style.color = '#FF0000';
            repPass.style.border = '3px solid  #FF0000';
            pass2Bool = false;
        };

    };

    function focusRepPass () {
        var warning = document.getElementById('errorText11');
        warning.firstElementChild.textContent = '';
    };


    function validateFirstName () {
        var alphBool = false;
        var fnValue = document.getElementById('firstName').value;
        for (alph of fnValue) {
            if ((isNaN(alph) && (alph != '') && fnValue.length > 3)) {
                alphBool = true;
                break;
            }; 
        };

        if (alphBool) {
            return true;
        } else {
            return false;
        };
    };

    function validateSurname() {
        var alphBool = false;
        var sValue = document.getElementById('surname').value;
        for (alph of sValue) {
            if (alph == spchar) {
                alphBool = false;
                break;
            } else if (isNaN(alph) && sValue.length >3) {
                alphBool = true;
                break;
            };
        };

        if (alphBool) {
            return true;
        } else {
            return false;
        };
    };

    function validateDna () {
        var numberBool = false;
        var dnaValue = document.getElementById('dna').value;
        for (number of dnaValue) {
            if (dnaValue.length > 7 && !(isNaN(number))) {
                numberBool = true;
                break;
            };
        };

        if (numberBool) {
            return true;
        } else {
            return false;
        };
    };

    function validateDateBirth () {
        if(new Date(dateBirth.value).getTime() > new Date().getTime()) {
            return false;
        } else {
            return true;
        };
    };

    function validatePhone () {
        var numberBool = false;
        var phValue = document.getElementById('phone').value;
        for (number of phValue) {
            if (phValue.length >= 10 && phValue.length < 11 && !(isNaN(number))) {
                numberBool = true;
                break;
            }; 
        };

        if (numberBool) {
            return true;
        } else {
            return false;
        };
    };

    function validateAdress () {
        var numberBool = false;
        var alphBool = false;
        var adValue = document.getElementById('adress').value;
        for (alph of adValue){
            for (number of adValue) {
                if (adValue.length > 5 && adValue.indexOf(' ') >= 0){
                    numberBool = true;
                    alphBool = true;
                    break;
                }; 
            };
        };

        if (numberBool && alphBool) {
            return true;
        } else {
            return false;
        };
    };
    
    function validateCity () {
        var alphBool = false;
        var ciValue = document.getElementById('city').value;
        for (var i = 0; i < ciValue.length; i++){
            if (ciValue[i] == spchar) {
                alphBool = false;
            } else {
                if (ciValue[i] == alph && ciValue.length > 3){
                   alphBool = true;
                   break; 
                };
            };
        };

        if (alphBool) {
            return true;
        } else {
            return false;
        };
    };

    function validatePostCode () {
        var numberBool = false;
        var pcValue = document.getElementById('postCode').value;
            for (var i = 0; i < pcValue.length; i++ ) {
            if (pcValue.length == 4 && !(isNaN(pcValue[i]))) {
                numberBool = true;
                break;
            } 
        }
        
        if (numberBool) {
            return true;
        } else {
            return false;
        };
    };
    
    function validateEmail () {
        var expReg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (email.value.match(expReg)){
            return true;
        } else {
            return false;
        };
     
    };

    function validatePassword () {
        var passVal = false;
        var pass1 = document.getElementById('password').value;
        if (pass1 !== '' && pass1.length > 7) {
            passVal = true;
        }    

        if (passVal) {
            return true;
        } else {
            return false;
        };
    };

    
    function validateRepPass () {
        var pass1 = document.getElementById('password').value;
        var pass2Val = false;
        var pass2 = document.getElementById('repPass').value;
        if (pass2 !== '' && pass2 == pass1) {
            pass2Val = true;
        } ;
       
 
        if (pass2Val) {
            return true;
        } else {
            return false;
        };
    };

    function continueClick (e) {
        e.preventDefault ();
        var msg = '';
        var newMsg = `\r\n`;
        msg = 'The data entered: ';

        if (firstNameBool && surnameBool && dnaBool && dateBirthBool && phoneBool && adressBool &&
            cityBool && pcBool && emailBool && passwordBool && pass2Bool) {
            msg += 'correct:' + 
            newMsg + 'Name: ' + document.getElementById('firstName').value + 
            newMsg + 'Surname: ' + document.getElementById('surname').value + 
            newMsg + 'DNA: ' + document.getElementById('dna').value +
            newMsg + 'Date of birth: ' + document.getElementById('dateBirth').value + 
            newMsg + 'Phone: ' + document.getElementById('phone').value + 
            newMsg + 'Adress: ' + document.getElementById('adress').value +
            newMsg + 'City: ' + document.getElementById('ciry').value + 
            newMsg + 'Post code: ' + document.getElementById('postCode').value + 
            newMsg + 'User email: ' + document.getElementById('email').value + 
            newMsg + 'Password: ' + document.getElementById('password').value
            newMsg + 'Repeat password: ' + document.getElementById('repPass').value;
        } else {
            msg += 'Incorrect. Check the next items; ';
            if (!firstNameBool) {
                msg += newMsg + 'Enter a valid name.';
            }
            if (!surnameBool) {
                msg += newMsg + 'Enter a valid surname.';
            }
            if (!dnaBool) {
                msg += newMsg + 'Enter a valid dna.';
            }
            if (!dateBirthBool) {
                msg += newMsg + 'Enter a valid date of birth.';
            }
            if (!phoneBool) {
                msg += newMsg + 'Enter a valid phone.';
            }
            if (!adressBool) {
                msg += newMsg + 'Enter a valid adress.';
            }
            if (!cityBool) {
                msg += newMsg + 'Enter a valid city.';
            }
            if (!pcBool) {
                msg += newMsg + 'Enter a valid post code.';
            }
            if (!emailBool) {
                msg += newMsg + 'Enter a valid email.';
            }
            if (!passwordBool) {
                msg += newMsg + 'Enter a valid password.';
            }
            if (!pass2Bool) {
                msg += newMsg + 'The password is wrong.';
            }
        }

        window.alert(msg); 
    }
  
}
;


