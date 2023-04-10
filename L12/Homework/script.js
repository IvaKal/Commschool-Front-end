function Car (make,model,year){
    return{
        tesla: make,
        s: model,
        2015: year,
        displayinfo: function (){
            document.write(this.make + "model" + this.s + "released in" + this.year);
        },
        getCarInfo: function (car){
            document.write(this.tesla + "drivers car" + car.name);
        },
    };
}

// function Person(name, age, cars){
//     return{
//         name: mName,
//         year: mYear,

//     };
// }

const tom = Person ("Tom", 24);
tom.displayinfo();

const tesla = Car ("Tesla", 2015)
tom.getCarInfo(tesla);