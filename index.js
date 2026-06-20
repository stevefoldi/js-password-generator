const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const generateBtn = document.getElementById('generate-btn');
const resetBtn = document.getElementById('reset-btn');
const passwordLengthInput = document.getElementById('password-length');
const includeNumbersInput = document.getElementById('include-numbers');
const includeSpecialCharInput = document.getElementById('include-speical-characters');
const passwordOneInput = document.getElementById('password-one');
const passwordTwoInput = document.getElementById('password-two');

function generatePassword() {
    let passwordOne = '';
    let passwordTwo = '';
    let arrExcludeList = [];
    let passwordCount = passwordLengthInput.value;
    let includeNumbers = includeNumbersInput.checked
    let includeSpeicalChar = includeSpecialCharInput.checked
    passwordOneInput.value = '';
    passwordTwoInput.value = '';

    if (!includeNumbers) {
        const numbersToRemove = ["0", "1", "2", "3", "4", "5", "6", "7", "8","9"];
        arrExcludeList.push(...numbersToRemove)
    }
    if (!includeSpeicalChar) {
        const specialCharToRemove = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
        arrExcludeList.push(...specialCharToRemove)
    }
    filteredNumList = characters.filter(item => !arrExcludeList.includes(item));

    for( let i = 0; i < passwordCount; i++ ) {
        passwordOne = Math.floor( Math.random() * filteredNumList.length )
        passwordOneInput.value += filteredNumList[passwordOne];
        
        passwordTwo = Math.floor( Math.random() * filteredNumList.length )
        passwordTwoInput.value += filteredNumList[passwordTwo];
    }
}

generateBtn.addEventListener('click', function() {
    generatePassword();
});
resetBtn.addEventListener('click', function() {
    passwordOneInput.value = '';
    passwordTwoInput.value = '';
})