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
        if (validatePassword()) {
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
        for (var i = 0; i < fnValue.length; i++) {
            for (var j = 0; j < fnValue.length; j++) {
                if (fnValue.length > 3 && fnValue[i] != spchar [j]) {
                    alphBool = true;
                    break;
                }
            }
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
            for (var j = 0; j < spchar.length; j++)
            if (ciValue[i] != spchar[j]) {
                alphBool = true;
                break;
            } 
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

    function validatePassword() {
        var numberBool = false;
        var spcharBool = false;
        var alphBool = false;
        var pValue = document.getElementById('password').value;

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
                for (let a = 0; a < alph.length; a++) {
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

    function validateRepPass () {
        var pass1 = document.getElementById('repPass').value;
        var pass2 = document.getElementById('password').value;
        var valRepPass = false;
        if (pass1 != '' && pass1 == pass2) {
            valRepPass = true;
        }

        if (valRepPass) {
            return true;
        } else {
            return false;
        }
    }

    function validateAll () {
        if (firstNameBool && surnameBool && dnaBool && dateBirthBool && phoneBool && 
            adressBool && cityBool && pcBool && emailBool && passwordBool && pass2Bool) {
            return true;
        } 
        
    }

    function formatDate(date) {
        var dateArray = date.split('-');
        return dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0];
    }

    function respData (jsonResp) {
        var msgD = '';
        var successD = Object.entries(jsonResp.data);
        console.log(successD);
        for (var i = 1; i < successD.length; i++) {
            msgD += '\n' + successD[i][0] + ': ' + successD[i][1];
        }
        return msgD;
    }

    
    function continueClick (e) {
        e.preventDefault ();
        var url = `https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${firstName.value}&lastName=${surname.value}&dni=${dna.value}&dob=${formatDate(dateBirth.value)}&phone=${phone.value}&address=${adress.value}&city=${city.value}&zip=${postCode.value}&email=${email.value}&password=${password.value}`;
        if (validateAll()) {
            fetch(url)
            .then(resp => resp.json())
            .then(jsonResp => {
                if (jsonResp.success) {
                    var msgs = jsonResp.msg;
                    alert('' + msgs + '' + respData(jsonResp));
                    localStorageSU();  
                } else {
                    var mesg = jsonResp.errors[0].msg;
                    alert('' + mesg);
                }
                setValue();
            })
            
            .catch(error => {
                alert(error)
            })
        }   
    }

    function localStorageSU () {
        localStorage.setItem('name', firstName.value);
        localStorage.setItem('lastname', surname.value);
        localStorage.setItem('dni', dna.value);
        localStorage.setItem('dob', dateBirth.value);
        localStorage.setItem('phone', phone.value);
        localStorage.setItem('address', adress.value);
        localStorage.setItem('city', city.value);
        localStorage.setItem('zip', postCode.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);    
    }

    function setValue () {
        firstName.setAttribute('value', localStorage.getItem('name'));
        surname.setAttribute('value', localStorage.getItem('lastname'));
        dna.setAttribute('value', localStorage.getItem('dni'));
        dateBirth.setAttribute('value', localStorage.getItem('dob'));
        phone.setAttribute('value', localStorage.getItem('phone'));
        adress.setAttribute('value', localStorage.getItem('address'));
        city.setAttribute('value', localStorage.getItem('city'));
        postCode.setAttribute('value', localStorage.getItem('zip'));
        email.setAttribute('value', localStorage.getItem('email'));
        password.setAttribute('value', localStorage.getItem('password'));
        repPass.setAttribute('value', localStorage.getItem('password'));
    }
}
;


