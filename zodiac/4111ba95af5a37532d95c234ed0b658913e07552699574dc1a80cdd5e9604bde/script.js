const answer = "ac9b8990f1879d5461ff668c6cfa0d6ec43f7dbacef10d8f524dfd6098b6f42b";

const submit = document.getElementById("submit_button")
const textbox = document.getElementById("input_box")

submit.addEventListener('click', () => {
    const hashedInput = CryptoJS.SHA256(textbox.value.toLowerCase()).toString(CryptoJS.enc.Hex); //encrypts input to hash
    console.log(hashedInput);
    if (hashedInput == answer) {
        window.location.href = `${textbox.value.toLowerCase()}.html`
    }; 
});