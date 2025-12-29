//Async Fucntion 
function getCheese() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const cheese = "Mozereella cheese";
            res(cheese);
        }, 2000);
    });
}
function getbase(cheese) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const base = "Dough";
            res(base);
        }, 2000);
    });
}

function makePizza(base) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const baked = "Pizza Ready";
            res(baked);
        }, 2000);
    });
}


async function  orderPizza(){
    const cheese = await getCheese();
    console.log("Dough is ready ", cheese)

    const base   = await getbase(cheese);
    console.log("Cheese is spread to dough " , base);
    
    const baked  = await makePizza(base);
    console.log("Pizza is Baked and ready to eat ", baked);
}

orderPizza(); 