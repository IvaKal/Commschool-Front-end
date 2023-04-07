// for

// for ([მრიცხველის ინციალიზაცია]; [პირობა]; [მრიცხველის შეცვლა]){
//     // მოქმედებები
// }
// const people = ["Tom" , "Alice" , "BoB" , "Sam"]
// for (let i = 0; i<people.length; i++){
//     console.log(people[i])
// }

// for .. in
// for(ინდექსი in მასივი) {
//     // მოქმედებეი
// }
// const peoples = ["Tom" , "Alice" , "BoB" , "Sam"]
// for (let index in peoples) {
//     console.log(peoples[index])
// }

// while

// while(პირობა){
//     მოქმედებეი
// }
//   const people = ["Tom" , "Alice" , "BoB" , "Sam"]
//   let index = 0;

//     while (index < people.length) {
//         console.log(people[index])
//         index++;
//     }

// do.. while
// let x = 1;
// do {
//     console.log(x * x)
//     x ++
// }while(x < 10)

// const numbers = [10,123,53, 12,67,12,123,4532,]

//  for (let i=0;  i < numbers.length; i ++) {
//     if (numbers[i] % 2  == 0) {
//         console.log("ლუწები", numbers[i])
//     }
//     else{
//         console.log("კენტებიუ", numbers[i])
//     }
//  }

//  function ფუნქციის სახელი (პარამეტრი) {
//     ინსტრუქციები
//  }

// function display() {
//     document.write("Hello World")
//   }

// display()

// function display(x, y) {
//     if(y ===undefined) y=x

//     let z = x * y;
//     console.log(z)
//   }

//   display(5,6)

// function display() {
//     let z = 1;
//     for (let i = 0; i<arguments.length; i++)
//     arguments[i] = z * z
//     console.log(z)
//  }
//  display(10)
///////////13///welcomeMessage
// function display(x,func) {

//     // x= 13
//     //func == welcomeMessage
//     let message = func(x)
//     // let message = welcomeMessage(13)
//     document.write(message)
//   }

//   function welcomeMessage(time) {
//     if(time<12)
//     return "Good morning"
//     else
//     return"Good evning"
//     }

//     display(13, welcomeMessage)

//     var x =5
//     function displaySquare() {
//         var z  = x * x;
//     }
//     // console.log(z)
// displaySquare()

// console.log(foo)

// const foo = "Tom"

// const c = a * b

// const a = 7;
// const b = 8;

// console.log(c)

// dipslay()

// const dipslay = function() {
//     alert("ola")
// }

const user = {};

user.name = "Tom";
user.age = 25;

user.dipslay = function () {
  console.log(user.name);
  console.log(user.age);
};

user.dipslay();

let student = {
  name: "tom",
  age: 25,
  "Full name": "Tom Jones",
  dipslay: function () {
    console.log(student.name);
  },
};

student.dipslay();

const country = {
  name: "შვეიცარია",
  languages: ["გერმანული", "ფრანგული", "იტალიური"],
  capital: {
    name: "ბერნ",
    population: 123123,
  },
  cities: [
    { name: "ციურიუხი", population: 123123 },
    { name: "ჟენევა", population: 1412 },
    { name: "ბაზელი", population: 345345 },
  ],
};

document.write("<h3>შვეიცარიის ოფიცალური ენებაი</h3>");
console.log(country.name);
for (let i = 0; i < country.languages.length; i++) {
  document.write(country.languages[i] + " <br/>");
}
document.write("<h3>შვეიცარიის ქალაქებია</h3>");
for (let i = 0; i < country.cities.length; i++) {
  document.write(country.cities[i].name + " <br/>");
}

const Events =[{
  band: "Giorgi",
  lastname: "apxo",
  band: "fadoci",
  uni: "comm",
  categopries: ["This week", "theatre"],
  currentInventory: 44,
  age: 24,
},
{
    band: "Giorgi",
    lastname: "apxo",
    band: "fadoci",
    uni: "comm",
    categopries: ["This week", "theatre"],
    currentInventory: 44,
    age: 24,
  },
  {
    band: "Giorgi",
    lastname: "apxo",
    band: "fadoci",
    uni: "comm",
    categopries: ["This week", "theatre"],
    currentInventory: 44,
    age: 24,
  },
  {
    band: "Giorgi",
    lastname: "apxo",
    band: "fadoci",
    uni: "comm",
    categopries: ["This week", "theatre"],
    currentInventory: 44,
    age: 24,
  },
  {
    band: "Giorgi",
    lastname: "apxo",
    band: "fadoci",
    uni: "comm",
    categopries: ["This week", "theatre"],
    currentInventory: 44,
    age: 24,
  },
  {
    band: "Giorgi",
    lastname: "apxo",
    band: "fadoci",
    uni: "comm",
    categopries: ["This week", "theatre"],
    currentInventory: 44,
    age: 24,
  }
];
console.log(Events);

const Element = document.getElementById("Document");

// map Events array and show in html document
 
Events.map((event) => {
    Element.innerHTML += `<div class="card">
    <div class="card-body">
        <h5 class="card-title">${event.band}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${event.lastname}</h6>
        <p class="card-text">${event.uni}</p>
        <a href="#" class="card-link">${event.categopries}</a>
        <a href="#" class="card-link">${event.currentInventory}</a>
    </div>
</div>`
})

console.log(Events);