const text = document.getElementById('texto');
const text2 = document.getElementById('texto2')
// const random = Math.floor(Math.random() * 150);
function getAdvice() {
    fetch("https://api.adviceslip.com/advice", {cache: "no-cache"})
    .then( response => response.json())
    .then( data => {
       const advice = data.slip.advice
       text.innerHTML = '"' + advice + '"'
    //    text2.innerHTML = "ADVICE #" + random
    }) 
    function showRandomNumber(){
        text2.innerHTML = "ADVICE #" + rando(1, 150);
    }
    showRandomNumber()
}

