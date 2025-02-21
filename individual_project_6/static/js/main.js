// main.js

// The following functions are partially complete. Use your knowledge of DOM
// manipulation and events to complete them and complete the game.  Feel free
// to test and inspect other code here, but you only need to actually fill in
// the blank areas of functions marked with "TODO":


// Retrieve an array of matching button DOM elements, if the given "numberButton" were clicked
function getMatchingButtons(numberButton) {
    let myValue = numberButton.getAttribute('data-value');
    let myTD = numberButton.parentNode;
    let myTR = myTD.parentNode;

    let buttons = []; // This will be a "bucket" to hold all the matching buttons

    // Get my right sibling... (e.g. NEXT <td></td> cell after me)
    let nextTD = myTD.nextSibling;
    if (nextTD) { // There is a next cell (e.g. not at the right side)
        let nextButton = nextTD.querySelector('button');
        if (nextButton) { // A button was added to this next cell...
            let nextButtonValue = nextButton.getAttribute('data-value');
            if (nextButtonValue === myValue) {
                buttons.push(nextButton); // Add it to the Array
            }
        }
    }

    // TODO: You'll need to make it check for the other 3 possible matching buttons.
    // Hint: Note that checking to the left will be very similar (except using
    // "previousSibling"), however, checking above and below will require
    // somewhat different code, due to it needing to select a certain element
    // in the next or previous table row (tr).
    let prevTD = myTD.previousSibling; //gets left siblings?
    if (prevTD) {
        let prevButton = prevTD.querySelector('button');
        if (prevButton){
            let prevButtonValue = prevButton.getAttribute('data-value');
            if (prevButtonValue === myValue) {
                buttons.push(prevButton);
            }
        }
    }

    let myIndex = Array.from(myTR.children).indexOf(myTD); // what "column" we are in
    //console.log("My index is: " + myIndex );

    
    let prevTR = myTR.previousSibling; // gets table row before "above" current row
    if (prevTR) { // there is another row above and current row is not the top of the grid
        let aboveTD = prevTR.children[myIndex]; // gets button "above" current button by using the index of current button
        if (aboveTD) {
            let aboveButton = aboveTD.querySelector('button');
            if (aboveButton){
                let aboveButtonValue = aboveButton.getAttribute('data-value');
                //console.log("My value is: " + myValue);
                //console.log("Above value is: " + aboveButtonValue);
                if (aboveButtonValue === myValue){

                    buttons.push(aboveButton);
                }
            }
        }

    }

    let nextTR = myTR.nextSibling; // gets table row after "below" current row
    if (nextTR) {// there is another row below and current row is not the bottom of the row
        let belowTD = nextTR.children[myIndex]; // gets button "below" current button by using index of current button
        if (belowTD) {
            let belowButton = belowTD.querySelector('button');
            if (belowButton){
                let belowButtonValue = belowButton.getAttribute('data-value');
                //console.log("My value is: " + myValue);
                //console.log("Below value is: " + belowButtonValue);
                if (belowButtonValue === myValue){
                    buttons.push(belowButton);
                }
            }
        }

    }


  















  
    // Always remember to return the variables you need outside!
    return buttons;
};

function setupNumberButton(numberButton) {
    numberButton.addEventListener('click', function () {
        let buttons = getMatchingButtons(numberButton);
        console.log(buttons);
        if (buttons.length >= 2) {
            // This means there are at least 2 other matching buttons, thus 3 total,
            // and we have a match.
            console.log('We have a MATCH!')
            // TODO: Complete this
            let updatedInt = parseInt(numberButton.getAttribute('data-value')); 
            //console.log(updatedInt);
            for (let i = 0; i < buttons.length; i++) {
                let buttonInt = parseInt(buttons[i].getAttribute('data-value'));
                updatedInt += buttonInt;
                buttons[i].parentNode.classList.remove('Tile--highlight');

                buttons[i].remove();

            }
            //console.log(updatedInt);
            let updatedValue = updatedInt + '';
            numberButton.setAttribute('data-value', updatedValue);
            numberButton['textContent'] = updatedValue;
            console.log(numberButton);


        
     
        }
    });

    numberButton.addEventListener('mouseover', function () {
        // This means the user "hovered" or moved their mouse over
        let buttons = getMatchingButtons(numberButton);
        // TODO: Complete this 
        // Hint: Similar to click, but only add the class Tile--highlight to the button's parent element

        if (buttons.length >= 2) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].parentNode.classList.add('Tile--highlight');
            }
        }






    });

    // TODO: Add another event for mouseleave
    // Hint: Similar to mouseover, but removing
    numberButton.addEventListener('mouseleave', function(){
        let buttons = getMatchingButtons(numberButton);

        if (buttons.length >= 2) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].parentNode.classList.remove('Tile--highlight');
            }
        }

    });









}

console.log('Main.js loaded');
