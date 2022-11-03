// Swap function for Sorting Algorithms takes input of 2 DOM element with .style.height feature.
function swap(el1, el2){
    console.log('In swap()');
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

//Disables Sorting Button so that we can disable during sorting and enable after completion 
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

// Enable Sorting Butttons
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

//Disable Size Slider so that we can disable during the running of the algorithm
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}

// Enable Size Slider
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}

// Disable New Array Button
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

//Enable New Array Button
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

// It is an Async Function for showing the animation of sorting, take milisecond time as input (1000ms = 1s)
function waitforme(milisec){
    return new Promise(resolve => {
        setTimeout(() => { resolve('')}, milisec);
    })
}


// Selecting size slider from DOM
let arraySize = document.querySelector('#arr_sz');

// Event Listener to update the bars on the UI
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

//Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider form DOM
let delayElement = document.querySelector('#speed_input');

// Event Listener to update delay time
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

// Initializing Array to store randomly generated numbers
let array = [];

// Call to display bars right when you visit the site
createNewArray();

// To create new array input size of array
function createNewArray(noOfBars = 60){
    //Calling helper function to delete old bars from DOM
    deleteChild();

    // Creating an array of random numbers
    array = [];
    for(let i = 0; i < noOfBars; i++){
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    // Selecting the div #bars element
    const bars = document.querySelector("#bars");

    // Create multiple element div using loop and adding class 'bar col'
    for(let i = 0; i < noOfBars; i++){
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild(){
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// Selecting New Array button from DOM and adding EventListener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
})