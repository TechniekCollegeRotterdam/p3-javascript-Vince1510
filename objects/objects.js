//object
let output = document.querySelector(".output");

const car= {
    //properties
    name:'Fiat',
    model:'500',
    weight:'850kg',
    color:'white',
    repairs: ['remschijven', 'banden', 'oliefilter'],
    //methods
    start: function(){
        return 'Ik ben gestart';
    },

    drive: function(){
        return 'Ik ga rijden';
    },

    brake: function(){
        return 'Ik ben de rem';
    },

    stop: function(){
        return 'Ik ben gestopt';
    },
};
output.innerHTML = `
<p>De naam van de auto is ${car.name}</p>
`

output.innerHTML = `
<p>${car.drive()}</p>
`

// //console is ook een object
// console.log(car.drive())
// console.log(car.color)
// console.log(car.repairs[2])
// console.log(car.name = 'Seat')

// // //zonder object
// // let car_name = "Fiat";
// // let model = "500";
// // let weight = "850kg";
// // let color = "white";

// // function drive(){
// //     return "I'm driving";
// // }