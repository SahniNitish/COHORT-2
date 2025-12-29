// //setTimeOut()

// console.log("hello");

// setTimeout( ()=>{
//     console.log("This Line will print after 3 sec.")
// } , 3000);

// console.log("Hello world - 2");
// console.log("Hello   World3 ") 

function getCheese(callback){
   setTimeout(()=>{
    const cheese = "CHEEEESSEE";
    console.log("Here is the CHeeese" , cheese);
    callback(cheese);
   },2000);  
} 

function makeDough(cheese , callback){
    setTimeout(()=>{
        const Dough = "Pizza Base";
        console.log("Here is the pizza Base ready!!!" , Dough);
        callback(Dough);
    } , 3000);
}

function Baking(Dough , callback){
    setTimeout(()=>{
        const Pizza = "Pizza Ready";
        console.log("Pizza is baked" , Pizza);
        callback(Pizza)
    },4000);
}





//This code below is Callback hell it can be more than 3+ hard to read the code so its better practice 
//to not use. so we use promises to remove this problem for callback hell or nested callback loops

getCheese((cheese)=>{
    makeDough(cheese ,(Dough)=>{
        Baking(Dough  ,(Pizza)=>{
        console.log("Pizza is ready to eat " , Pizza);
        });
    });
   });


// pizza - > dough -> cheese
