const text = document.getElementById('texto');
const text2 = document.getElementById('texto2')
console.log(text)
function getAdvice() {
    w3.getHttpObject("https://api.adviceslip.com/advice", function (data) {
        advice = data.slip.advice
        text.innerHTML = '"' + advice + '"'
        console.log(advice)
    })
}
const random = Math.floor(Math.random() * 150);
function randomNumber() {
    text2.innerHTML = "ADVICE #" + random
}
console.log(random)

