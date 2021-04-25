let values = [];
let w = 10;
let states = [];

function setup(){

    createCanvas(windowWidth,windowHeight);
    values = new Array (floor(width / w));
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
        states[i] = -1;

    }

    quickSort(values, 0, values.length - 1);
}

async function quickSort(arr, start, end){

    if(start >=end){
        return;
    }

    let index = await partition(arr, start, end);
    states[index] = -1;
    await Promise.all([quickSort(arr, start, index - 1),
        quickSort(arr, index + 1, end)]);

}

async function partition(arr, start, end){

    for (let i = start; i < end; i++){
        states[i] = 1;
    }
    let pivotIdx = start;
    let pivotValue = arr[end];
    states[pivotIdx] = 0;
    for (let i = start; i < end; i++){

        if (arr[i] < pivotValue){
            await swap(arr, i, pivotIdx);
            states[pivotIdx] = -1; 
            pivotIdx++;
            states[pivotIdx] = 0;
        }
    }
    await swap(arr, pivotIdx, end);

    for (let i = start; i < end; i++){
        if (i != pivotIdx){
        states[i] = -1;
        }
    }
    return pivotIdx;
}

function draw() {

    background(0);

    for (let i = 0; i < values.length; i++) {
    noStroke();
    if (states[i] == 0) {
      fill('#FF3131');
    } else if (states[i] == 1) {
      fill('#FFFFFF');
    } else {
      fill('#AAFF00');
    }
    rect(i * w, height - values[i], w, values[i]);
    }

}

async function swap(arr, a, b) {
    await sleep(15)
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

//Equivalent of async sleep func
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}