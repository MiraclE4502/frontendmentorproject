// let cat1 = Number(prompt("enter cat1: "))
// let cat2 = Number(prompt("enter cat2: "))
// let exam = Number(prompt("enter exam score: "))

// function sum(cat1, cat2, exam){
//     result = cat1  + cat2 + exam
//     console.log(result)
// }

// sum(cat1, cat2, exam)

// function total(arr){

//     let totalarr = 0
//     for(let i = 0; i <= arr.length-1; i++){
//         console.log(arr[i])
//         totalarr = totalarr + arr[i]
//     }

//     return "total = " + totalarr
// }


// const num = [1,2,3,4,8,9,13,0,34,23,0]
// console.log(total(num))


//create a function dat will takes in a devimal number and logs out a base 2
 

// function converttobase2(n){
     
//     let numbers = ""
//     let i;
//     i = n

//     for(; i > 1; i = i / 2){
//         numbers = Math.floor(i % 2) + numbers
//     }

 

//     return numbers

// }

// console.log(converttobase2(20))

//create a function dat will takes in a devimal number and logs out a base 2
// another method


// function convertTobase2 (number){

//     let binary = "";

//     while(number > 0){
        
//         rem = number % 2

//         binary = `${rem}${binary}`;
//         number = Math.floor(number/2)
//     }

//     return `the binary is ${binary}`
// }

// console.log(convertTobase2 (20))

// write a function that will take in a number and return the number of digits

function getnumberofdigits(number){
    let v = number
    let result = ""+v

    return "the number has "+result.length + " digits"
}


console.log(getnumberofdigits(2000))