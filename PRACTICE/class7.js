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


getCheese()
    .then((cheese) => {
        console.log("Here is the first step to make pizza", cheese);
        return getbase(cheese);
    })
    .then((base) => {
        console.log("Dough is ready", base);
        return makePizza(base);

    }).then((baked) => {
        console.log("Pizza is ready to eat", baked);

    }).catch((data) => {
        console.log('error occured');
    })