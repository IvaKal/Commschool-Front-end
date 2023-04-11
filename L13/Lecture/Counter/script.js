// function increaseValue() {
//     let value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value
//     value ++ ;
//     document.getElementById('number').value = value
//   }

//   function decreaseValue() {
//     let value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value
//     value < 1 ? value -1 : ' '
//     value -- ;
//     document.getElementById('number').value = value
//     }


// let LogData = document.getElementById("log")

let number_el = document.querySelector("#log")
console.log(number_el)
let number = 0
function increaseValue() {
    let value = parseInt(number_el.innerText)
    console.log(value)
    let maxNumber = 10
    if (number < maxNumber){
        number ++
    }
    number_el.innerText = number
}
function decreaseValue() {
    let value = parseInt(number_el.innerText)
    console.log(value)
    let minNumber = 0
    if (number > minNumber){
        number --
    }
    number_el.innerText = number
}