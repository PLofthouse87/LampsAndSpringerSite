// "use strict";

//console.log("Hello World!");

//DOM Variables
//Creating the variable mainPageImage to hold the .mainPageImage DOM node
let mainPageImage = document.getElementById("mainPageImage");
//Create the variable mainPageImageCol to hold the .mainPageImageCol node
let mainPageImageCol = document.getElementById("mainPageImageCol");
//Creatinge the variable lampsText to hold the .lampsText DOM node
if (document.getElementById("lampsText")) {let lampsText = document.getElementById("lampsText");}
//Creatinge the variable springerText to hold the .springerText DOM node
if (document.getElementById("springerText")) {let springerText = document.getElementById("springerText");}





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

//Array of Objects
//Creating the array catBios to hold an array of two objects each holding the bio details for the respective cat
const catBios = [
    {
        name: "Lamps",
        dob: "TBD",
        placeOfBirth: "Alexandria in Egypt",
        personality: "Reserved but very affectionate",
        appearance: "Black fur shifting to brown in places with bright yellow eyes.",
        crime: "Worked out how to wobble the kitchen door in such a way that he can open it. But he's such a sweetheart he only does so when he's lonely and wants to be in the kitchen with you",
        favFood: "Chicken",
        favTreat: "Salmon paste tube",
        favouriteGame: "Learning tricks",
        vocalness: "Quite quiet"
    },
    {
        name: "Springer",
        dob: "TBD",
        placeOfBirth: "Alexandria in Egypt",
        appearance: "White fur with black patches, notably on one ear and all of her tale. She also has a pink ear",
        crime: "Managed to jump up on top of the cupboards in the Kitchen. Then with a little more trouble worked out how to get back down",
        favFood: "Lamb",
        favTreat: "Salmon paste tube",
        favouriteGame: "Chasing things",
        vocalness: "Very vocal and very loud"
    }
]






//Events
//Creating onload events to populate the lampsText and springerText variables with text
if (document.getElementById("lampsText")){lampsText.addEventListener("load", (event) => {
    lampsText.innerHTML = "Super Cart!";
});}

if(document.getElementById("springerText")){springerText.addEventListener("load", (event) => {
    springerText.innerHTML = "Drawer Queen!";
});}



//Creating a click event for the DOM element held in the variable mainPageImage that prints to the console
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

// //Creating the click event on the DOM element held in mainPageImage that will change the .innerHTML held in the variable mainPageImageCol by calling the mainImageChange function
// mainPageImage.addEventListener("click", (event) => {
//     mainImageChange();
// });

mainPageImageCol.addEventListener("click", mainImageChange);

