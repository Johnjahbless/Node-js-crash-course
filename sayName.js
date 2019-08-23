const sayName = () => {
    console.log("John is learning Node")
};


const sayAddress = () => {
    console.log("My street")
};


module.exports.sayName = sayName;
module.exports.sayAddress = sayAddress;