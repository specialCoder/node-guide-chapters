const EventEmitter = require('events').EventEmitter;

class Dog extends EventEmitter{

}

class Food{

}

const myDog = new Dog();

myDog.on('chew', (item) => {
    if(item instanceof Food){
        console.log('Good dog')
    }else{
        console.log(`time to buy another ${item}`);
    }
})

const main = () => {
    console.log('mina-->');
    myDog.emit('chew', 'shoe'); // Will result in console.log('Time to buy another shoe')
    const bacon = new Food();
    myDog.emit('chew', bacon); // Will result in console.log('Good dog')
}

module.exports = {
    main,
    myDog,
    Food,
}