const password = document.querySelector(".password-result-text");
const passwordLength = document.querySelector(".password-slider-text-length");
const passwordMin = document.querySelector(".password-slider-min");
const passwordMax = document.querySelector(".password-slider-max");
const passwordSlider = document.querySelector(".password-slider-input");
const passwordCopyBtn = document.querySelector(".password-result-icon");
const passwordGeneratorBtn = document.querySelector(".password-btn");
const upperCase = document.querySelector("#checkbox1");
const lowerCase = document.querySelector("#checkbox2");
const numbers = document.querySelector("#checkbox3");
const symbols = document.querySelector("#checkbox4");

// immediately invoked function
(function(){
    passwordLength.textContent = passwordSlider.value;
    passwordMin.textContent = passwordSlider.min;
    passwordMax.textContent = passwordSlider.max;
    passwordSlider.style.setProperty("--width-value", ((100/(passwordSlider.max - passwordSlider.min)) * (passwordSlider.value-passwordSlider.min)) + "%")
})()


// adding functiality of changing length and changing width while sliding the slider
passwordSlider.addEventListener("input", (e) => {
    passwordLength.textContent = e.currentTarget.value;
    e.currentTarget.style.setProperty("--width-value", ((100/(e.currentTarget.max - e.currentTarget.min)) * (e.currentTarget.value-e.currentTarget.min)) + "%")
})  


const upperCaseChars = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const numbersChars = "0123456789";
const symbolsChars = "!@#$%&*_";


// functions to get a random character from each types of cases
function getUpperCase(){
    return upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)]
}
function getLowerCase(){
    return lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)]
}
function getNumber(){
    return numbersChars[Math.floor(Math.random() * numbersChars.length)]
}
function getSymbol(){
    return symbolsChars[Math.floor(Math.random() * symbolsChars.length)]
}



// generatePassword function
function generatePassword(isUpperCase, isLowerCase, isNumbers, isSymbols, length){
    let password = "";
    if (!isUpperCase && !isLowerCase && !isNumbers &&!isSymbols){
        password = ""
    }else{
        for (let i = 0; i<length; i++){    
            if (isUpperCase){
                password += getUpperCase();
            }
            if (isLowerCase){
                password += getLowerCase();
            }
            if (isNumbers){
                password += getNumber();
            }
            if (isSymbols){
                password += getSymbol();
            }
        }
    }
    const finalPassword = password.slice(0, length);
    return finalPassword;


    // second method

    // const counterCase = isUpperCase + isLowerCase + isNumbers + isSymbols ;
    // const detailsCase = [
    //     {isUpperCase : isUpperCase},
    //     {isLowerCase: isLowerCase},
    //     {isNumbers : isNumbers},
    //     {isSymbols : isSymbols}
    // ]
    // const detailsCaseTrue = detailsCase.filter((item) => Object.values(item)[0] === true);
    // if (counterCase === 0){
    //     // means we have not selected any CaseType
    //     password = "";
    // }else{
    //     for (let i=0; i<length; i+=counterCase){
    //         detailsCaseTrue.forEach((item) => {
    //             const keyItem = Object.keys(item)[0];
    //             if (keyItem === "isUpperCase"){
    //                 password += getUpperCase() 
    //             }else if (keyItem === "isLowerCase"){
    //                 password += getLowerCase();
    //             }else if (keyItem === "isNumbers"){
    //                 password += getNumber();
    //             }else if (keyItem === "isSymbols"){
    //                 password += getSymbol();
    //             }
    //         })
    //     }

    //     const finalPassword = password.slice(0, length)
    //     return finalPassword;
    // }


}

// when we click on the generate password button
passwordGeneratorBtn.addEventListener("click", (e) => {
    const generatedPassword = generatePassword(upperCase.checked, lowerCase.checked, numbers.checked, symbols.checked, +passwordSlider.value);
    password.textContent = generatedPassword;
})


// when we click on passwordCopy button
passwordCopyBtn.addEventListener("click", (e) => {
    const pass = password.textContent;
    if (pass){
        // if password exist
        navigator.clipboard.writeText(pass);
    }
})


















