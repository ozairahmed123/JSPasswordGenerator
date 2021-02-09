const generatePassword = () => {

    var passLength = document.getElementById("PasswordRange").value;
   
    var UpperCase = document.getElementById("UpperCase").checked;
    var LowerCase = document.getElementById("LowerCase").checked;
    var Numeric = document.getElementById("Numeric").checked;
    var SpecialCharacter = document.getElementById("SpecialCharacter").checked;

    var chars = '';
    var checkOption = 0;

    if (UpperCase == true) {
        chars = chars + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        ++checkOption;
    }
    if (LowerCase == true) {
        chars = chars + 'abcdefghijklmnopqrstuvwxyz';
        ++checkOption;
    }
    if (Numeric == true) {
        chars = chars + '0123456789';
        ++checkOption;
    }
    if (SpecialCharacter == true) {
        chars = chars + '~!@#$%^&*';
        ++checkOption;
    }

    if (checkOption < 1) {
        document.getElementById("errorMsg").innerHTML = "Please select at lest one option";
    } else {
        var passString = randomString(passLength, chars);
        document.getElementById("PasswordResult").value=passString;
  document.getElementById("generatePasswordModal").style.display = "none";
  document.querySelector(".modal-backdrop.show").style.opacity=0;
    }

};

const randomString = (length, chars) => {
    var result = '';
    for (var i = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}