const sumAll = function(x, y) {

    if ( typeof x != 'number' || typeof y != 'number') {
        return 'ERROR'
    } else if ( x < 0 || y < 0 ) {
        return 'ERROR'
    } else {
        let sorted = [x,y]
        let newX = Math.min(...sorted)
        let newY = Math.max(...sorted)
        return ((newY - newX +1) * (newX + newY) /2 )
    }
};

//document.getElementById('output').innerText = sumAll(4, 1)
// Do not edit below this line
module.exports = sumAll;