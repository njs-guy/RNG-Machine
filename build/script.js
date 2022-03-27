// Opens and closes tabs
function openTab(evt, tabName) {
    let i, tablinks;
    let tabN = document.getElementById(tabName);

    // Get all elements with class "tabcontent" and hide them
    let tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class "tablinks" and remove class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i <tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and add an "active" class to the button that opened it
    tabN.style.display = "block";
    evt.currentTarget.className += " active";
}

// Hides the history panel
function hideHistory() {
    // Declare id constants
    const historyBox = document.getElementById("historybox");
    const historyText = document.getElementById("historytext");
    const hide_history = document.getElementById("hidehistory");

    // Hide historybox and historytext
    historyBox.style.display = "none";
    historyText.style.display = "none";

    // Change text of button and change onclick function
    hide_history.innerText = "Show history";
    hide_history.onclick = function() { showHistory() };
}

// Shows the history panel
function showHistory() {
    // Declare id constants
    const historyBox = document.getElementById("historybox");
    const historyText = document.getElementById("historytext");
    const hide_history = document.getElementById("hidehistory");

    // Hide historybox and historytext
    historyBox.style.display = "initial";
    historyText.style.display = "initial";

    // Change text of button and change onclick function
    hide_history.innerText = "Hide history";
    hide_history.onclick = function() { hideHistory() };
}

// The main number generating function
function generateNumbers(amount = 5, min = 1, max = 100, sort = false, allowDupes = true, allowDecs = false, decPlaces = 0) {

    // If amount is less than 1, set it to 1
    if (amount < 1) {
        amount = 1;
    }

    // If min is greater than max, set min to 0
    if(min > max) {
        min = 0;
    }

    let output = []; //array of results
    let dupe = false; //If current number is a duplicate
    let loopCount = 0; //Number of rerolls for current number
    let n = 0; //Current number

    for( let x = 0; x < amount; x ++) {
        
        do { //Loop the following until there is not a duplicate

            // If decimals are not allowed, round down to whole number
            // If decimals are allowed, change to decimal place.
            if(allowDecs === false) {
                n = Math.floor((Math.random() * (max + 1 - min)) + min);
            } else {
                n = (Math.random() * (max + 1 - min)) + min;
                n = n.toFixed(decPlaces);
            }

            // If duplicate numbers are not allowed, and n is included in output, dupe is true so reroll the number.
            if(allowDupes === false) {
                if(output.includes(n)) {
                    dupe = true;
                } else {
                    dupe = false;
                }
            }
            loopCount += 1;

            // Breaks the loop if infinite. Returns an array of one string labeled "null"
            if (loopCount >= 100){
                showPopupMessage("Infinite loop error. No result.");
                nullOutput = [];
                nullOutput.push("null");
                return nullOutput;
            }
        }
        while (dupe); // End loop for current number

        // Reset loop count, push current number to output
        loopCount = 0;
        output.push(n);
    }

    // Sort results if sort is true
    if (sort) {
        output.sort(function(a, b){return a-b});
    }

    return output;
}

// Outputs numbers to the output and history panels
function outputNumbers(randNums, coins = false) {
    const outputBox = document.getElementById("outputbox");
    outputBox.textContent = ""; // reset output text

    const historyBox = document.getElementById("historylist");

    // If the output should be heads or tails, convert numbers in array. 1 is heads, 2 is tails.
    if(coins) {
        for( let x = 0; x < randNums.length; x++) {
            switch (randNums[x]) {
                case 1:
                    randNums[x] = "heads";
                    break;
                case 2:
                    randNums[x] = "tails";
                    break;
                default:
                    randNums[x] = "The coin landed on its side";
                    break;
            }
        }
    }

    for( let x = 0; x < randNums.length; x++) {
        outputBox.textContent += randNums[x]; // Outputs current number to output panel

        let liNode = document.createElement("LI"); // Create a li element
        let textNode = document.createTextNode(randNums[x]); // Add text to that li element
        liNode.className = "history-item"; // Give the li a class
        liNode.appendChild(textNode); // Append the text to the li
        historyBox.appendChild(liNode); // Append the li to the history panel

        if(x !== randNums.length - 1) { // If this is not the last number, add a comma
            outputBox.textContent += ", ";
        }
    }
}

// Generates a set of numbers using info from Numbers tab
function generateFromNumbersTab() {
    let quantity = parseInt(document.getElementById("quantityNum").value);
    let rangeMin = parseInt(document.getElementById("rangeMin").value);
    let rangeMax = parseInt(document.getElementById("rangeMax").value);
    let sort = document.getElementById("sortResults").checked;
    let dupes = document.getElementById("allowDupes").checked;
    let decs = document.getElementById("allowDecimals").checked;
    let places = parseInt(document.getElementById("decimalPlaces").value);
    

    let nums = generateNumbers(quantity, rangeMin, rangeMax, sort, dupes, decs, places);
    outputNumbers(nums);
}

// Rolls dice using info from Dice Roll tab
function rollDice() {
    let quantity = parseInt(document.getElementById("quantityDice").value);
    const rangeMin = 1;
    let rangeMax = parseInt(document.getElementById("sides").value);
    let sort = document.getElementById("sortResults").checked;

    let nums = generateNumbers(quantity, rangeMin, rangeMax, sort);
    outputNumbers(nums);
}

// Flips coins using info from Coin Flip tab
function flipCoins() {
    let quantity = parseInt(document.getElementById("quantityCoins").value);
    let sort = document.getElementById("sortResults").checked;

    let nums = generateNumbers(quantity, 1, 2, sort);
    outputNumbers(nums, true);
}

function usePreset(preset=1) {
    let nums = [];

    switch(preset){
        case 1:
            nums = generateNumbers(parseInt(document.getElementById("num-preset").value), 1, 100, true);
            outputNumbers(nums);
            break;
        case 2:
            nums = generateNumbers(parseInt(document.getElementById("d6-preset").value), 1, 6, true);
            outputNumbers(nums);
            break;
        case 3:
            nums = generateNumbers(parseInt(document.getElementById("d20-preset").value), 1, 20, true);
            outputNumbers(nums);
            break;
        case 4:
            nums = generateNumbers(parseInt(document.getElementById("coin-preset").value), 1, 2, true);
            outputNumbers(nums, true);
            break;
        default:
            console.log("Undefined preset");
    }
}

// Takes what's currently in the output panel and copies it to the clipboard
function copyOutput() {
    const output = document.getElementById("outputbox");

    if (output.textContent !== "No numbers yet.") {
        navigator.clipboard.writeText(output.textContent);
        showPopupMessage("Copied output to clipboard.");
    } else {
        showPopupMessage("There is no output to copy yet.");
    }
}

// Takes what's currently in the history panel and copies it to the clipboard
function copyHistory() {
    const historyList = document.getElementById("historylist");
    const historyItems = historyList.getElementsByClassName("history-item");
    let output = "";

    if(historyItems.length > 0){

        for (let i = 0; i < historyItems.length; i ++) {
            output += historyItems[i].textContent;

            if(i !== historyItems.length - 1) { // If this is not the last number, add a comma
                output += ", ";
            }
        }

        navigator.clipboard.writeText(output);
        showPopupMessage("Copied history to clipboard.");

    } else {
        showPopupMessage("There is no history to copy yet.");
    }
}

// Makes sure every sort checkbox has the same value
function syncSortBoxes(checkValue) {
    const sortResults = document.getElementById("sortResults");
    const sortDice = document.getElementById("sortDice");
    const sortCoins = document.getElementById("sortCoins");

    sortResults.checked = checkValue;
    sortDice.checked = checkValue;
    sortCoins.checked = checkValue;
}

// Clears the history and output panels
function clearHistory() {
    const outputBox = document.getElementById("outputbox");
    const historyList = document.getElementById("historylist");

    outputBox.textContent = "No numbers yet."; // reset output text

    while(historyList.hasChildNodes()) {
        historyList.removeChild(historyList.firstChild)
    }
}

// If the checkbox next to the decimal places drop down is not checked, make the dropdown disabled
function disableDecimalDropdown(checkValue) {
    const decimalPlaces = document.getElementById("decimalPlaces");
    decimalPlaces.disabled = checkValue;
}

function changeTheme(newTheme = 0) {
    const body = document.getElementsByTagName("body")[0];
    const themeNames = ['light-theme', 'dark-theme', 'black-theme'];

    body.className = ''; // Clears current body classes
    body.classList.add(themeNames[newTheme]); // Adds new theme as a class

    saveSettings();
}

function showPopupMessage(message = "Error.") {
    const popMess = document.getElementById("popup-message");

    popMess.textContent = message;
    popMess.className = "show";
    setTimeout(function(){popMess.className = popMess.className.replace("show", ""); }, 3000);
}

function saveSettings() {
    const sortResults = document.getElementById("sortResults");
    const currentTheme = document.getElementById("theme-dropdown");
    const defaultTab = document.getElementById("tab-dropdown");
    const showHistoryCheck = document.getElementById("showHistoryStart");

    localStorage.sort = sortResults.checked;
    localStorage.currentTheme = currentTheme.selectedIndex;
    localStorage.defaultTab = defaultTab.selectedIndex;
    localStorage.showHistoryStart = showHistoryCheck.checked;
}

function loadSettings() {
    let currentTheme = localStorage.currentTheme;
    let tab = localStorage.defaultTab;

    // Show history on start
    if(localStorage.showHistoryStart === "false"){ // Does not use boolean because JavaScript
        hideHistory();
    } else if(localStorage.showHistoryStart === "true") {
        document.getElementById("showHistoryStart").checked = true;
    }

    // Theme
    document.getElementById("theme-dropdown").selectedIndex = currentTheme;
    changeTheme(currentTheme);
    
    // Start tab
    document.getElementById("tab-dropdown").selectedIndex = tab;

    switch(parseInt(tab)){
        case 0:
            document.getElementById("num-link").className += " defaultOpen";
            break;
        case 1:
            document.getElementById("dice-link").className += " defaultOpen";
            break;
        case 2:
            document.getElementById("coin-link").className += " defaultOpen";
            break;
        case 3:
            document.getElementById("presets-link").className += " defaultOpen";
            break;
        default:
            document.getElementById("num-link").className += " defaultOpen";
            break;
    }

    // Sort results
    syncSortBoxes(localStorage.sort);

    saveSettings();
}

// Load user settings
loadSettings();

// Open the default tab on start
document.getElementsByClassName("defaultOpen")[0].click();