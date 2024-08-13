const userInput = document.getElementById("value");

const cel_to_far = document.getElementById("c-f");
const far_to_cel = document.getElementById("f-c");
const submitBtn = document.querySelector("button");
const convertedValueOutput = document.getElementById("converted-value");
let inputvalue;
let convert_value;
submitBtn.addEventListener("click", () => {
        const userInput_value = document.getElementById("value").value;

        if (isNaN(userInput_value) || userInput_value===""|| userInput_value.includes("-")||userInput_value.includes("+")) {
                convertedValueOutput.innerText = "Please Input a valid tempreture value";
        }
        else {
                if (cel_to_far.checked) {
                        inputvalue = Number(userInput_value);
                        convert_value = (inputvalue * 1.8) + 32;
                        convertedValueOutput.innerText = `${convert_value.toFixed(2)} °F`;
                } else if (far_to_cel.checked) {
                        inputvalue = Number(userInput_value);
                        convert_value = (inputvalue - 32) * (5 / 9);
                        convertedValueOutput.innerText = `${convert_value.toFixed(2)} °C`;
                } else {
                        convertedValueOutput.innerText = "Please select your convert type .";
                }
        }



})