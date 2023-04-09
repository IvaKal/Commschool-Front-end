// const currentDate = new Date();

// document.write(currentDate);




const countDownDate = new Date("Mar 2, 2023, 21:00:00").getTime()

const x = setInterval(
    function () {
        const now = new Date().getTime()
        const distance = countDownDate - now
        const days = Math.floor(distance / 1000 / 60 / 60 / 24 )
        const hours = Math.floor(distance / 1000 / 60 / 60) % 24
        const minutes = Math.floor(distance  / 1000 / 60) % 60
        const seconds = Math.floor(distance / 1000) % 60
        document.getElementById("demo").innerHTML = days + "days" + hours + "hours" + minutes + "minutes" + seconds + "seconds"
      },
    1000,
) 

// setTimeout(() => {
//     alert("Delayed for 1 second.");
//   }, "1000")


const z = -25;

console.log(Math.abs(z))

console.log(Math.min(15,25,53,18))
console.log(Math.max(15,25,53,18))

console.log(Math.ceil(9.2))
console.log(Math.floor(9.2))
console.log(Math.round(9.5))

console.log(Math.random())

console.log(Math.pow(2,3))

console.log(Math.sqrt(121))