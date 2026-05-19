const display= document.getElementById("display");

function appendToDisplay(input){
    if (display.value=="Overflow"){
        return;
    }
    else if (display.value.length<=15){
        display.value += input;
    }
    else{
        display.value="Overflow";
        return;
    }
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

