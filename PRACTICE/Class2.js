//Complex Primitives

//write a program to print all the even numbers in a array
// const ages = [21 , 22 , 33 , 44 , 33 , 31 , 77, 99];

// for (i = 0 ; i<ages.length; i++){

//     if (ages[i] % 2 == 0 ){
//         console.log(ages[i]);
//     }
// }

/*
write a program that print all the male people's first name 
given a complex object
 */

 const allUsers = [{
    firstName:"Nitish",
    gender   :"male"
    },
    {
    firstName:"kashish",
    gender   :"Female"
}]

for (let  i = 0 ; i<allUsers.length; i++){
    if(allUsers[i].gender == "male"){
        console.log(allUsers[i].firstName)
    }
}

//functions
