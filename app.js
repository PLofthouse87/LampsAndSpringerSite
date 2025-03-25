"use strict";

//console.log("Hello World!");

//---Code not tied to one HTML file---
    //Creating date objects to hold dates of birth for each cat
    const lampsDob = new Date("2018-09-15");
    const springerDob = new Date("2019-05-15");
    //Array of Objects
    //Creating the array catBios to hold an array of two objects each holding the bio details for the respective cat
    const catBios = [
        {
            name: "Lamps",
            dob: lampsDob,
            pronoun: "He",
            placeOfBirth: "Alexandria in Egypt",
            personality: "reserved but very affectionate",
            appearance: "black fur shifting to brown in places with bright yellow eyes.",
            crime: "worked out how to wobble the kitchen door in such a way that he can open it. But he's such a sweetheart he only does so when he's lonely and wants to be in the kitchen with you",
            favFood: "Chicken",
            favTreat: "salmon paste tubes",
            favouriteGame: "Learning tricks",
            vocalness: "quite quiet"
        },
        {
            name: "Springer",
            dob: springerDob,
            pronoun: "she",
            placeOfBirth: "Alexandria in Egypt",
            personality: "affectionate, friendly and very affectionate",
            appearance: "white fur with black patches, notably on one ear and all of her tale. She also has a pink ear",
            crime: "managed to jump up on top of the cupboards in the Kitchen. Then with a little more trouble worked out how to get back down",
            favFood: "Lamb",
            favTreat: "salmon paste tubes",
            favouriteGame: "Chasing things",
            vocalness: "very vocal and very loud"
        }
    ]

    //Creating a function that takes one argument, name
    //The function will use a for loop and an if statement to check each object to see if the value paired with the name key matches the argument
    //If it does then index of will be used to pull that object out of the array and create a new variable
    //That variable will then be combined with dot notation to create a template literal that will be inserted into the innerHTML of an element on the corresponding web page
    function catBioWriter(name) {
        //Creating the local variable bio to hold the the object the for loop/if statement selects, as an empty array
        let bio = "";
        //Creating the for loop
        for (let i=0; i < catBios.length; i++) {
            //Creating the if statement to check if the name value matches the argument
            if (catBios[i].name === name) {
                bio = catBios[i];
        
            }
        }
        return `${bio.name} was born in ${bio.placeOfBirth} on ${bio.dob.toDateString()}. ${bio.pronoun} has ${bio.appearance} and is ${bio.personality}. ${bio.pronoun} likes to eat ${bio.favFood} and loves ${bio.favTreat} as a treat! Their most impressive crime was when they ${bio.crime}. ${bio.pronoun} likes to play ${bio.favouriteGame} and when it comes to communicating ${bio.pronoun.toLowerCase()} is ${bio.vocalness}.
        `
    }

    //Array of Images
    //Creating the array mainImageOps to hold the HTML for all three mainPageImage options
    const mainImageOps = [
        //First image
        `<img src="/LampsAndSpringerSite/siteImages/lampsAndSpringer1.jpg" class="img-fluid imgPortrait" alt="" id="mainPageImage">
        <figcaption class="col-8 d-flex justify-content-center" id="mainPageImageCap"><em>Click the image to change it.</em></figcaption>`,
        //Second image
        `<img src="/LampsAndSpringerSite/siteImages/lampsAndSpringer2.jpg" class="img-fluid imgPortrait" alt="" id="mainPageImage">
        <figcaption class="col-8 d-flex justify-content-center" id="mainPageImageCap"><em>Click the image to change it.</em></figcaption>`,
        //Third image
        `<img src="/LampsAndSpringerSite/siteImages/lampsAndSpringer3.jpg" class="img-fluid imgLandscape" alt="" id="mainPageImage">
        <figcaption class="col-8 d-flex justify-content-center" id="mainPageImageCap"><em>Click the image to change it.</em></figcaption>`
    ];


//---index.html code---
//Using an if statement to check if the id indexBody, which is the id of the <body> of index.HTML is present
if(document.getElementById("indexBody")) {
    //DOM Variables
    //Creating the variable mainPageImage to hold the .mainPageImage DOM node
    // let mainPageImage = document.getElementById("mainPageImage");
    //Create the variable mainPageImageCol to hold the .mainPageImageCol node
    let mainPageImageCol = document.getElementById("mainPageImageCol");

    //Creating a click event for the DOM element held in the variable mainPageImage that prints to the console
    mainPageImageCol.addEventListener("click", (event) => {
        console.log("Click worked!");
    });

    //Creating a "load" event to set the main page image as mainImageOps[0]
    window.addEventListener("load", (event) => {
        mainPageImageCol.innerHTML = mainImageOps[0];
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

    //Test
    console.log("Main page!");

}

//---contactForm.html code---
//Using an if statement to check if the id contactBody, which is the id of the <body> of contactForm.HTML is present
if(document.getElementById("contactBody")) {
    //Test
    console.log("Form page!")
}

//---lampsPage.html code---
//Using an if statement to check if the id lampsBody, which is the id of the <body> of lampsPage.HTML is present
if(document.getElementById("lampsBody")) {
    //Dom Variables
    //Creating the variable lampsText to hold the .lampsText DOM node
    let lampsText = document.getElementById("lampsText");
    
    
    //Events
    //Creating onload events to populate the lampsText and springerText variables with text
    window.addEventListener("load", (event) => {
        lampsText.innerHTML = catBioWriter("Lamps");
    });
}


//---springerPage.html code---
//Using an if statement to check if the id springerBody, which is the id of the <body> of springerPage.HTML is present
if(document.getElementById("springerBody")) {
    //Dom variables
    //Creatinge the variable springerText to hold the .springerText DOM node
    let springerText = document.getElementById("springerText");


    //Events
    //Creating onload events to populate the lampsText and springerText variables with text
    window.addEventListener("load", (event) => {
        springerText.innerHTML = catBioWriter("Springer");
    });
}



























