// defining all the required variables 

var translateInput = document.querySelector("#translate-input"); 

var translateButton = document.querySelector("#translate-button");

var translateOutput = document.querySelector("#translate-output");

var url = "https://api.funtranslations.com/translate/minion.json";





// processing the variables 

translateButton.addEventListener("click", clickHandler)

function callingURL(inputText){
    return url + "?" + "text=" + inputText
}


function clickHandler(event){
    console.log("button clicked");
    var input = translateInput.value;
    var finalURL = callingURL(input);
    console.log(finalURL);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("There is unknown error"))
}