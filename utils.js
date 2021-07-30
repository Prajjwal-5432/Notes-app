console.log('utils.js');

let name = 'Prajjwal';

const add = (x, y)=> {
    return x + y;
}

module.exports = {add, name};

// in main file use as value.add(1, 2) or value.name using dot operator