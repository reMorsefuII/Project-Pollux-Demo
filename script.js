const answers = {
    "beginnings": "97590a84e25762db1d92ddc33fe73adb67b94f610f39082219e0b95c799af5e0",
    "aries" : "5782b773133f2983daa2bdfefd4a7034a57ee8d900897ec0b5051627f4269ffb",
    "taurus" : "23353488769f59636a7a7145b146e7ac85dbc694d579371972ea6d4272e66c77",
    "gemini" : "c8dae79ccd04fe9db5e1eb258247dbca56b3c4d4698da5b55510b6cc76ae0498",
    "cancer" : "bca4b6a028e467e3f13a17cb24de38b80547ce1f048c2f75306fde41525138bf",
    "leo" : "1d3bc6158bf227cc244bd82616f9a95021bb0c341b69fb54d37cfcb3c87ebfd5",
    "virgo" : "24d2b030ceb3eb3da7b6ff14b4f6a1b2044d58279a33d315690694a93bd4f67b",
    "libra" : "84938191021c881180909908525dc2124cbc214081adf074cf609de9f9ab5ab6",
    "scorpio" : "5846d60018319b9e79700f11a3e826117b1bc6d3fd974c7348b38e9d671816c0",
    "sagittarius" : "6a7a49fc565822728b827a929cf8a1820f2a35f1f0b610e333b96268d9547673",
    "capricorn" : "270fd076df620dfc6234c4b2bae509d432be5c662b5ba77f10c856eecf894533",
    "aquarius" : "77f6954cf19912d281bf845a921e0f09756f37a230b8cefe5ce8add23683b6c6",
    "pisces" : "cfb858c8bc39bb9b4badb01a58b2c385bc61c320c75a0e6440e179bb1e51b527"
};

const submit = document.getElementById("submit_button")
const textbox = document.getElementById("input_box")

let progress = JSON.parse(localStorage.getItem("progress") || `{"aries" : "","taurus" : "","gemini" : "","cancer" : "","leo" : "","virgo" : "","libra" : "","scorpio" : "","sagittarius" : "","capricorn" : "","aquarius" : "","pisces" : ""}`);
submit.addEventListener('click', () => {
    const pagename = window.location.pathname.split('/').pop().replace(/\.[^/.]+$/, "") //regex to remove file extension
    const hashedInput = CryptoJS.SHA256(textbox.value.toLowerCase()).toString(CryptoJS.enc.Hex); //encrypts input to hash
    console.log(hashedInput);
    if (hashedInput == answers[pagename]) {
        if (pagename in progress) {
            console.log("Metapuzzle piece found")
            progress[pagename] = textbox.value.toLowerCase();
            localStorage.setItem("progress", JSON.stringify(progress));
        };
        window.location.href = `${textbox.value.toLowerCase()}.html`
    }; 
});