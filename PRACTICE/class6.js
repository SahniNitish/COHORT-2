//Promises

 const ticket = new Promise(function(res , rej){
    const isBoarded = false;

    if(isBoarded){
        res("Your flight is Confirmed!!!!");
    }else{
        rej("Your flight is cancelled");
    }
 });

 ticket
       .then((data)=>{
           console.log("Congratulation" , data);
       })
       .catch((data)=>{
           console.log("Sorry" , data);
       })
       .finally((data)=>{
           console.log("By Nitish Sahni");
       })