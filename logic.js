var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('input-type');
var resultType = document.getElementById('result-type');
var inputTypeResult , resultTypeResult;

//adding eventListerner
input.addEventListener('keyup', myResult);
inputType.addEventListener('change',myResult);
resultType.addEventListener('change',myResult);

//takeing initial value
inputTypeResult = inputType.value;
resultTypeResult = resultType.value;

function myResult(){

    //set inputType and outType  
    inputTypeResult = inputType.value;
    resultTypeResult = resultType.value;

    //convert inputType values to outputType values
    //feet to inches
    if(inputTypeResult === 'feet' && resultTypeResult === 'inches'){
        let f = input.value;
        let i = f*12;
        result.value = i;
    }
    //feet to centimeter
    else if(inputTypeResult === 'feet' && resultTypeResult === 'cm'){
        let f = input.value;
        let c = f*30.48;
        result.value = c;
    }
    //by defult value
    else if(inputTypeResult === 'feet' && resultTypeResult === 'feet'){
        result.value = input.value;
    }
    
    //inches to feet
    if(inputTypeResult === 'inches' && resultTypeResult === 'feet'){
        let i = input.value;
        let f = i/12;
        if(!Number.isInteger(f)){
            f = f.toFixed(4);  //taking 4 value after decimal
        }
        result.value = f;
    }
    //inches to centimeter
    else if(inputTypeResult === 'inches' && resultTypeResult === 'cm'){
        result.value = (input.value)*2.54;
    }

    //by default
    else if(inputTypeResult === 'inches' && resultTypeResult === 'inches'){
        result.value = input.value;
    }
    
    //centimeter to feet
    if(inputTypeResult === 'cm' && resultTypeResult === 'feet'){
        let c = input.value;
        let f = c / 30.48;
        if(!Number.isInteger(f)){
            f = f.toFixed(4);  // taking 4 value after decimal 
        }
        result.value = f;
    }

    // centimeter to inches
    else if(inputTypeResult === 'cm' && resultTypeResult === 'inches'){
        let i = (input.value)/2.54;
        if(!Number.isInteger(i)){
            i = i.toFixed(4);  //taking 4 value after decimal
        }
        result.value = i;
    }

    //by default
    else if(inputTypeResult === 'cm' && resultTypeResult === 'cm'){
        result.value = input.value;
    }

    


}
