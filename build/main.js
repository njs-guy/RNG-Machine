// Opens and closes tabs
function openTab(evt, tabName) {
    var i, tab, tablinks;

    // Get all elements with class "tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class "tablinks" and remove class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i <tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and add an "active" class to the button that opened it
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// The main number generating function
function generateNumbers(amount = 5, min = 1, max = 100, allowDecs = false, allowDupes = true, sort = false) {

    // If amount is less than 1, set it to 1
    if (amount < 1) {
        amount = 1;
    }

    // If min is greater than max, set min to 1
    if(min > max) {
        min = 1;
    }

    var output = [];

    for( var x = 0; x < amount; x ++) {
        var n = Math.floor((Math.random() * (max + 1 - min)) + min);
        output.push(n);
    }

    outputNumbers(output);
}

function outputNumbers(randNums) {
    outputBox = document.getElementById("outputbox");
    outputBox.textContent = ""; // reset output text

    historyBox = document.getElementById("historylist");

    for( var x = 0; x < randNums.length; x++) {
        outputBox.textContent += randNums[x];

        var liNode = document.createElement("LI");
        var textNode = document.createTextNode(randNums[x]);
        liNode.appendChild(textNode);
        historyBox.appendChild(liNode);

        if(x !== randNums.length - 1) { //If this is not the last number, add a comma
            outputBox.textContent += ", ";
        }
    }
}

// Generates a set of numbers using info from Numbers tab
function generateFromNumbersTab() {
    quantity = parseInt(document.getElementById("quantityNum").value);
    rangeMin = parseInt(document.getElementById("rangeMin").value);
    rangeMax = parseInt(document.getElementById("rangeMax").value);
    generateNumbers(quantity, rangeMin, rangeMax);
}

// Rolls dice using info from Dice Roll tab
function rollDice() {
    quantity = parseInt(document.getElementById("quantityDice").value);
    rangeMin = 1;
    rangeMax = parseInt(document.getElementById("sides").value);
    generateNumbers(quantity, rangeMin, rangeMax);
}

function flipCoins() {
    quantity = parseInt(document.getElementById("quantityCoins").value);
    generateNumbers(quantity, 1, 2);
}

// Open the default tab on start
document.getElementById("defaultOpen").click();