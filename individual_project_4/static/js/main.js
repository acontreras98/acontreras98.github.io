
// Note: Two basic functions are here for you to examine.
// Open the Console to see the results.
function pressZero() {
    typeSymbol(0);
    console.log('Zero was pressed. New expression:', expression);

}
function pressOne() {
    typeSymbol(1);
    console.log('One was pressed. New expression:', expression);

}
function pressTwo() {
    typeSymbol(2);
    console.log('Two was pressed. New expression:', expression);
}
function pressThree() {
    typeSymbol(3);
    console.log('Three was pressed. New expression:', expression);

}
function pressFour() {
    typeSymbol(4);
    console.log('Four was pressed. New expression:', expression);

}
function pressFive() {
    typeSymbol(5);
    console.log('Five was pressed. New expression:', expression);

}
function pressSix() {
    typeSymbol(6);
    console.log('Six was pressed. New expression:', expression);

}
function pressSeven() {
    typeSymbol(7);
    console.log('Seven was pressed. New expression:', expression);

}
function pressEight() {
    typeSymbol(8);
    console.log('Eight was pressed. New expression:', expression);

}
function pressNine() {
    typeSymbol(9);
    console.log('Nine was pressed. New expression:', expression);

}
function pressDecimal() {
    typeSymbol('.');
    console.log('Decimal was pressed. New expression:', expression);
}

function pressDivide() {
    //expression = expression + '/';
    typeSpecialSymbol('/', '÷');
    console.log('Divide was pressed. New expression:', expression);

}
function pressTimes() {
    //expression = expression + '*';
    typeSpecialSymbol('*', 'x');
    console.log('Times was pressed. New expression:', expression);
}

function pressMinus() {
    typeSymbol('-');
    console.log('Minus was pressed. New expression:', expression);
}

function pressPlus() {
    typeSymbol('+');
    console.log('Plus was pressed. New expression:', expression);
}

function pressExpTwo() {
    //typeSymbol('**2');
    typeSpecialSymbol('**2', '²');
    console.log('Exponent two was pressed. New expression:', expression);

}

function pressExpThree() {
    //typeSymbol('**3');
    typeSpecialSymbol('**3', '³');
    console.log('Exponent three was pressed. New expression:', expression);

}

function pressPercent() {
    //typeSymbol('/100');
    typeSpecialSymbol('*0.01', '%');
    console.log('Percent was pressed. New expression:', expression);

}

function pressPerMil(){
    //typeSymbol('/100000');
    typeSpecialSymbol('*0.0001 ', '‰');
    console.log('Per mil was pressed. New expression:', expression);

}


function pressClear(){
    clearExpression();
    console.log('Clear was pressed. New expression:', expression);
}

function pressResult(){
    loadResult();
}

function pressBackspace(){
    backSpace();
    console.log('Backpace was pressed. New expression:', expression);
}
 

/* ***************************************** */
// The following is the function structure of the solution.
// Feel free to use this as a guide, or change it to your own!

/*
   Updates the calculator display
*/
function updateDisplay() {
    let displayDiv = document.querySelector('#display')
    // Hint: Will eventually need changes!
    //displayDiv.innerHTML = expression;
    displayDiv.innerHTML = displayedExpression;

    let errorMessage = document.querySelector('#error');
    errorMessage.innerHTML = '&nbsp;';

}

/*
   Deletes the last typed character
*/
function backSpace() {
    // TODO: Fill this in!
    lastChar = _getLastCharacter(displayedExpression);
    length = 1;
    if (lastChar === '²' || lastChar === '³'){
        length = 3;
    }
    else if(lastChar === '‰'){
        length === 7;
    }
    else if(lastChar === '%'){
        length = 5;
    }
    expression = _removeLastCharacters(expression, length);
    displayedExpression = _removeLastCharacters(displayedExpression, 1);
    updateDisplay();

}

/*
   Clears what's typed
*/
function clearExpression() {
    // TODO: Fill this in!
    expression = '';
    displayedExpression = '';
    document.querySelector('#display').innerHTML = '&nbsp;';
}

/*
   Adds one symbol to the expression
*/
function typeSymbol(symbol) {
    // TODO: Fill this in!

    expression = expression + symbol;
    displayedExpression = displayedExpression + symbol;
    updateDisplay();
}

/*
   Adds one symbol to the expression, but with a different user-visible label
*/
function typeSpecialSymbol(symbol, label) {
    
    displayedExpression = displayedExpression + label;
    expression = expression + symbol;
    updateDisplay();

}

/*
   Loads the numeric result of the last computation into the expression
*/
function loadResult() {
    expression = result;
    displayedExpression = result;
    updateDisplay();
}


/*
   Appends the current expression to the "receipt" below the calculator
*/
function addToReceipt() {
    let receiptDiv = document.querySelector('#receipt_contents');
    if (result != null) {
        receipt =  receipt + displayedExpression + ' = ' + result + '<br />';
    }
    // fill in
    receiptDiv.innerHTML = receipt;
}

/*
   Display error message to screen
*/
function showError(message) {
    // TODO: Fill this in!
    let errorMessage = document.querySelector('#error');
    errorMessage.innerHTML = message;

}

addToReceipt(); // Call right away to show the default message
