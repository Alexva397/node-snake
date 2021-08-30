const keypress = require('keypress');
const figlet = require('figlet');

keypress(process.stdin);

const height = 30;
const width = 60;
let snake = [];




const gameScreen = () => {
    console.clear();

    figlet('SNAKE', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });

    for (let i = 0; i < height; i++) {
        let spot = '';

        for (let j = 0; j < width; j++) {
            if (isArrayItemExists(snake, [j, i])) {
                spot += '⃞';
            } else {
                spot += '-';
            }
        }
        console.log(spot);
    }
    
}







const isArrayItemExists = (array, item) => {
    for ( var i = 0; i < array.length; i++ ) {
        if(JSON.stringify(array[i]) == JSON.stringify(item)){
            return true;
        }
            }
            return false;
}

gameScreen();