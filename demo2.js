const candidates = [
    {
        candidateName: "Rahul Sharma",
        city: "Mumbai",
        contact: "9876543210",
        username: "Rahul.sharma",
        password: "Rahul@123"
    },
    {
        candidateName: "Priya Patil",
        city: "Pune",
        contact: "9876501234",
        username: "priya.patil",
        password: "Priya@456"
    },
    {
        candidateName: "Amit Joshi",
        city: "Mumbai",
        contact: "9988776655",
        username: "amit.joshi",
        password: "Amit@789"
    },
    {
        candidateName: "Neha Kulkarni",
        city: "Ahmedabad",
        contact: "9123456789",
        username: "neha.kulkarni",
        password: "Neha@321"
    },
    {
        candidateName: "Rohit Mehta",
        city: "Pune",
        contact: "9012345678",
        username: "rohit.mehta",
        password: "Rohit@111"
    },
    {
        candidateName: "Sneha Deshmukh",
        city: "Mumbai",
        contact: "9098765432",
        username: "sneha.deshmukh",
        password: "Sneha@222"
    },
    {
        candidateName: "Vikas Shah",
        city: "Delhi",
        contact: "9898989898",
        username: "vikas.shah",
        password: "Vikas@333"
    },
    {
        candidateName: "Pooja Verma",
        city: "Ahmedabad",
        contact: "9765432109",
        username: "pooja.verma",
        password: "Pooja@444"
    },
    {
        candidateName: "Karan Singh",
        city: "Delhi",
        contact: "9345678901",
        username: "rahul.sharma",
        password: "Karan@555"
    },
    {
        candidateName: "Meena Rao",
        city: "Pune",
        contact: "9567890123",
        username: "meena.rao",
        password: "Meena@666"
    }
];


//array find 

// let result = candidates.find(function(values){
//     return values.city==="Mumbai";
// })
// console.log(result)

//filter 

// let result = candidates.filter(function (values) {
//     return values.city === "Mumbai";
// })
// console.log(result)

//arrow function in array

let result = candidates.filter((values) => values.city === "Mumbai");


// a loop with a break option example

// for (let x = 0; x < candidates.length; x++) {
//     if (candidates[x].city === "Mumbai") {
//         console.log(Object.entries(candidates)[x]);
//         break;
//     }
// }


//continue statement

// for (let x = 0; x < candidates.length; x++) {
//     if (candidates[x].city == "Mumbai") {
//         continue;
//     }
//     console.log(Object.entries(candidates)[x]);
// }

// in for loop evrything is in one line but in while loop interation is up on while 


//while loop 
// let num = 1463;
// let n = num;
// let sum = 0;
// while (n != 0) {
//     sum = sum + (n % 10);
//     n = Math.floor(n / 10);
// }
// console.log(sum);


// do while loop (I-> E-> U-> ->repeate) condition checks true or false if false then stop 
