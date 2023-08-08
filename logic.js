const mainText = document.querySelector('.mainText');
const outputText = document.querySelector('.outputText');
const lowerOnly = /^[a-z\s!@#$%^&*()_+={}[\]|\\:;"'<>,.?/~`]+$/;
const noneMessages = document.querySelector('.noneMessages');
const copyButton = document.querySelector('.copyButton');

function validateLowerCase () {
    let initialText = mainText.value.toString();
    if (!lowerOnly.test(initialText)) {
        alert('Solo se permiten letras minúsculas y sin acentos')
        mainText.value = '';
        mainText.focus();
        return true;
    } 
}

function encrypt(textToEncrypt) {
    let encryptedText = textToEncrypt.toString().replace(/[aeiou]/g, (encryptedString) => {
        switch(encryptedString) {
            case 'a': return 'ai';
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'o': return 'ober';
            case 'u': return 'ufat';
            default: return encryptedString;
        }
    });

    return encryptedText;
}

function encryptButton() {
    if (!validateLowerCase()) {
        let newText = encrypt(mainText.value.toString());
        outputText.value = newText;
        outputText.style.backgroundImage = 'none';
        noneMessages.style.visibility = 'hidden';
        copyButton.style.display = 'inline-block';
    }
}


function decrypt(textToDecrypt) {
    let decryptedText = textToDecrypt.toString().replace(/ai|enter|imes|ober|ufat/g, (decryptedString) => {
        switch(decryptedString) {
            case 'ai': return 'a';
            case 'enter': return 'e';
            case 'imes': return 'i';
            case 'ober': return 'o';
            case 'ufat': return 'u';
            default: return decryptedString;
        }
    });

    return decryptedText;
}

function decryptButton() {
    if (!validateLowerCase()) {
        let newText2 = decrypt(mainText.value.toString());
        outputText.value = newText2;
        outputText.style.backgroundImage = 'none';
        noneMessages.style.visibility = 'hidden';
        copyButton.style.display = 'inline-block';
    }
}

function copyText() {
    if (outputText.value != null) {
        navigator.clipboard.writeText(outputText.value);
        alert('Texto copiado')
        mainText.value = '';
        mainText.focus();
    }
}


