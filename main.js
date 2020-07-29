//lev 2_7
// Schreibe eine Funktion, die beim Anklicken des Buttons ein Element mit aufsteigenden Nummern erstellt.

const content = document.querySelector('.umwickeln')

let button = document.querySelector("button");
counter = 0;
button.addEventListener("click", function count() {
    if (counter % 10 == 0 || counter == 0) {
        let div2 = document.createElement("div")
        div2.classList.add("weiss") //add class
        let num2 = document.createTextNode(`${counter}`)
        div2.appendChild(num2)
        content.appendChild(div2)

    } else {
        let div1 = document.createElement("div");
        div1.classList.add("rechteck") //add class
        let num1 = document.createTextNode(`${counter}`)
        div1.appendChild(num1)
        content.appendChild(div1)
    }
counter++
})