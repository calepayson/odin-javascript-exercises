const removeFromArray = function(array1, ...args) {
    args.forEach((arg) => {
        let index = array1.indexOf(arg);
        while (index !== -1) {
            array1.splice(index, 1);
            index = array1.indexOf(arg);
        }
    });
    return array1;
};

// Do not edit below this line
module.exports = removeFromArray;
