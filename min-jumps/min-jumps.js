
'use strict';

// Complete this algo
const minJumps = arr => {
    let step = 0;
    let pointer = 0;
    let newArrObj = {};
    //let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let key = i;
        newArrObj[key] = arr[i];

    }
    console.log(newArrObj);
    // console.log(newArrObj[pointer])
    // console.log(newArrObj[pointer + 1])
    while (pointer < arr.length) {
        let endValue = newArrObj[pointer]
        let max = 0;
        for (let i = pointer + 1; i <= endValue; i++){
            if (max < newArrObj[i ] ) {
                max = newArrObj[i ]
            }
            console.log(`max : ${max}`)
        }
        console.log('uydsfgkuydfghdfku')
        pointer = arr.indexOf(max);
        console.log(pointer);
        step++;
    }
    console.log(step)
    return step;
};

module.exports = minJumps