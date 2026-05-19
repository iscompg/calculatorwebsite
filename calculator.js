const display= document.getElementById("display");

function appendToDisplay(input){
    if (display.value=="Overflow"){
        return;
    }

    let parts= display.value.split(/[\+\-\*\/%]/);
    let currentNumber= parts[parts.length-1];

    if (currentNumber.length>=15 && !isNaN(input)){
        display.value="Overflow";
        return;
    }
    display.value+=input;
}

function clearDisplay(input){
    if (input ==="ac"){
        display.value = "";
    }
    else if (display.value=="Overflow"){
        return;
    }
    else{
        display.value= display.value.slice(0, -1);
    }
}

function calculateDisplay(input){
    try{
        display.value=eval(display.value);
    }

    catch(error){
        display.value="Error";
    }
}

function toggleSign(input){
    display.value= Number(display.value)*(-1);
}

