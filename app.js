"use strict";

//console.log("Hello World!");

//DOM Variables
//Creating the variable mainPageImage to hold the .mainPageImage DOM element
mainPageImage = document.getElementById("mainPageImage");
//Create the variable mainPageImageCol to hold the .mainPageImageCol DOM element
mainPageImageCol = document.getElementById("mainPageImageCol");







//Array of Images
//Creating the array mainImageOps to hold the HTML for all three mainPageImage options
const mainImageOps = [
    //First image
    `<img src="/LampsAndSpringerSite/siteImages/lampsAndSpringer1.jpg" class="img-fluid" alt="" id="mainPageImage">`,
    //Second image
    `<img src="/LampsAndSpringerSite/siteImages/lampsAndSpringer2.jpg" class="img-fluid" alt="" id="mainPageImage">`,
    //Third image
    `<img src="/LampsAndSpringerSite/siteImages/lampsAndSpringer3.jpg" class="img-fluid" alt="" id="mainPageImage">`
];








//Events
// //Creating a click event for the DOM element held in the variable mainPageImage that prints to the console
mainPageImage.addEventListener("click", (event) => {
    console.log("Click worked!");
});

// //Creating a click event for the mainPageImage variable that will change the inner HTML of the DOM element held in mainPageImageCol variable
// mainPageImage.addEventListener("click", (event) =>{
//     //Changing the image displayed upon click
//     mainPageImageCol.innerHTML = mainImageOps[1];
// })

//Creating a repeating click event for the mainPageImage variable that will cycle through the mainImageOps array via a switch statement and add the appropriate HTML to the .mainPageImageCol element.
// Creating the iterator variable mainIt holding zero
let mainIt = 0;
//Creating the function mainImageChange to iterate through the elements in the mainImageOps array with each click
function mainImageChange() {
    switch(mainIt) {
        case 0:
            mainPageImageCol.innerHTML = mainImageOps[1];
            mainIt++;
            break;
        case 1:
            mainPageImageCol.innerHTML = mainImageOps[2];
            mainIt++;
            break;
        case 2:
            mainPageImageCol.innerHTML = mainImageOps[0];
            mainIt = 0;
            break;
    }
}

//Creating the click event on the DOM element held in mainPageImage that will change the .innerHTML held in the variable mainPageImageCol by calling the mainImageChange function
mainPageImage.addEventListener("click", (event) => {
    mainImageChange();
});
