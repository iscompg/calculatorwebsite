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
    display.scrollLeft=display.scrollWidth;
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

        let expression = display.value.replace(/x/g,'*');
        let result =eval(expression);

        if (result.toString().length > 10){
            display.value= result.toExponential(5);
        }
        else{
            display.value=result;
        }
    }

    catch(error){
        display.value="Error";
    }
}

function toggleSign(input){
    display.value= Number(display.value)*(-1);
}

