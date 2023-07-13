// ლუწი
// let data=[1,4,18,24,15,2,3,19,55]

// function even(array){
//     for(let i=0; i<array.length; i++){
//     if(array[i]%2 == 0) {
//         console.log(array[i])
//     }
//     }
// }

// even(data);

// let data=[1,4,18,24,15,2,3,19,55]

// function odd(array){
//     for(let i=0; i<array.length; i++){
//     if(array[i]%2 == 1) {
//         console.log(array[i])
//     }
//     }
//

// odd(data);

// let data = [ 1,4, 18, 24, 15, 2, 3, 19, 55];

// function max(array) {
//   let m = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > m) {
//       m = array[i];
//     }
//   }
//   console.log(m)
// }

// max(data);

// let data = [ 1,4, 18, 24, 15, 2, 3, 19, 55];

// function mini(array) {
//   let mini = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < mini) {
//       mini = array[i];
//     }
//   }
//   console.log(mini)
// }

// mini(data);

// let data = [ 1,4, 18, 24, 15, 2, 3, 19, 55];
//     for (let i in data) {
//         console.log(data[i])
//     }

// // შექმენიტ ფუნქცია სადაც ერთ ფუნქციას გამოიყენებთ
// მოერე ფუნქციის პარამეტრად და if else მეშვეობით დაბეჭდეთ რამე
// ინფორმაცია (მაგ: თუ რამე ნივთის ფასი მაღაზიაში არის 50 ლარზე მეტი
//     ესეიგი ძვირია თუ 20-50 დიაპაზონშია მოქცეული საშუალო თუ ნაკლები იაფი)

// function funqcia(x, y) {
//   if (x > 50) {
//     y("ძვირია");
//   } else if (x > 20) {
//     y("საშუალოა");
//   } else {
//     y("იაფია");
//   }
// }
// funqcia(51, dabechdva);

// function dabechdva(sityva) {
//   console.log(sityva);
// }

// 4)კლასების და ობიექტების პრინციპით უნდა ააწყოთ ფილმების ინფორმაცია 
// მაგალითად უნდა იყოს რამე სახხელი კინოთეატრის რა ენაზე აჩვენებენ ფილმებს
//  მისამართი და ცალკე ფილების ჩამონათვალი როგორც ქალაქებში გვაქვს თავისი 
// //  იმდბ რეიტინგით
// country = { 
// name:"შვეიცარია",
// languages: ["გერმანული" , "ფრანგული" , "იტალიური"],
// capital:{   
// name:"ბერნი",
// population:123123
// },
// cities :[
// {name:"ცურიხი", population:31232131},
// {name:"ჟენევა", population:12313},
// {name:"რამე", population:13123211231}
// ]
// }

// function Movie(name, language, location, rating, ) {
//     this.name = name
//     this.language = language
//     this.location = location
//     this.rating = rating
//     return this
// }
// let movie = new Movie("aaa","Enlgish", "tbilisi", 1 )
// let movie1 = new Movie("asd","asd", "tbiliasdsi", 0.1 )
// console.log(movie)
// console.log(movie1)



//  შექმენით Constructor Function სახელად Car, რომელიც იღებს შემდეგ 
// არგუმენტებს:
//  function Car(make, model, year) {
//  // your code goes here...
//  }

//  დააიმპლემენტირეთ getCarInfo() მეთოდი რომელიც აბრუნებს ავტომობილის 
// შესახებ ინფორმაციას შემდეგ ფორმატში:
//  `Tesla Model S released in 2015`

//  შექმენით ახალი Constructor Function სახელად Person, რომელიც მიიღებს 
// შემდეგ არგუმენტებს:

//  function Person(name, age, cars) {
//  // your code goes here...
//  }

// m
//  მიეცით სახელები ბილლ და ტომი და დააბეჭდინეთ რომ ტომს არის 24 
// წლის და ყავს მანქანა Tesla Model S released in 2015

// function Car (make, model, year) {
//     this.make = make
//     this.model = model
//     this. year = year
//     this.getCarinfo = function(){
//         return this.make +" "+ this. model +" released in "+ this.year
        
//     }
// }

// var car = new Car("tesla","model s",2015)
// console.log(car.getCarinfo())

// function Person (name, age, car){
//     this.name = name
//     this.age = age
//     this.car = car
//     this.print = function() {
//         return this.name + " is " + this.age + " years old and has a " + this.car.getCarinfo()
//     }
// }
// var person = new Person ("tommy", 24, car)
// console.log(person.print())
