let generateBtn = document.querySelector("button");
let passoutput = document.querySelector("p");


const generatePassword=(lowerCaseChar, passwordLength, upperCaseChar, symbolChar, numberChar)=> {
        let totalchars = "";
        let password = "";
        const lowerCase = "abcdefghijklmanoprstuvwxyz";
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const synbol = "~!@#$%^&*()_+{}:'|,./<>?;\\[]=-`";
        const number = "0123456789";
        const length = passwordLength;
        totalchars += lowerCaseChar ? lowerCase : "";
        totalchars += upperCaseChar ? upperCase : "";
        totalchars += symbolChar ? synbol : "";
        totalchars += numberChar ? number : "";
        if (length <= 0) {
                return "(your password length needs to be at least 1)";
        }
        if (totalchars.length == 0) {
                return "you need to select atleast one option"
        }
        for (let i = 0; i < length; i++) {
                let indexOf = Math.floor(Math.random() * totalchars.length) + 1;
                password += totalchars[indexOf];
        }

        return password;
}


generateBtn.onclick = () => {
        const lowerCaseChar = document.getElementById("lowercase").value;
        const passwordLength = document.getElementById("password-length").value;;
        const upperCaseChar = document.getElementById("uppercase").value;
        const symbolChar = document.getElementById("symbol").value;
        const numberChar = document.getElementById("number").value;

       let finalPass= generatePassword(lowerCaseChar, passwordLength, upperCaseChar, symbolChar, numberChar);
       passoutput.innerHTML=`<span>Your Generated Password is:<span>\n ${finalPass}`
}

