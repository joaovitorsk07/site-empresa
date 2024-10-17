const dgtEmail = document.querySelector("#dgtemail")
const formDoc = document.querySelector("#formdoc")

formDoc.addEventListener("submit", function(event){
    event.preventDefault();
    const email = dgtEmail.value;
alert(email)
})

//validar email
const isValid = validateEmail(email)
if (isValid){
    resultMessage.textContent = "E-mail valido";
    resultMessage.style.color = "green";
} else {
    resultMessage.textContent = ("E-mail invalido");
    resultMessage.style.color = "red";
}

const validateEmail = (email) => {
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    return regex.test(email);
}