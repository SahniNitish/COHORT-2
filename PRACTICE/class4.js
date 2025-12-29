//CallBack 

function party(guest , invites){
    console.log('Hi ' + guest);
    invites();
}

//callback use krna hai 
let callme =()=>{
  console.log("Yes!! This guest is Invited");
}

//passing the function as a argument
party('Peter' , callme);

//Array call backfunction 
const a = [2, 33,5 ,6 ,-1 , -5 ,-6 , 100];

const firstNeg =(num)=> {
    return num < 0 ;

}
const result = a.find(firstNeg);
const res    = a.findIndex(firstNeg);
console.log(result);
console.log(res);


a.forEach((num)=>{
    console.log("Array Num" , num );
})