function inputCheck(number1){
        let result = [];
        if(number1.length <= 3){
            result.push("correct");
        }
        else{
            result.push("incorrect");
            return result.join(' , ');
        }
    
        for(let i = 0; i < number1.length; i++)
        {
            if(number1[i] == '.')
            {
                result.pop();
                result.push("incorrect");
            }
        }
        return result.join(' , ');
}

function outputCheck(number1){
    console.log("v" + number1);
    let result = [];
    if(number1 < 0)
    {
        
        result.push("Can not display Negative numbers");
        console.log(result);
        return result.join(' , ');
    }
    if(number1.length <= 6){
        for(let i = 0; i < number1.length; i++)
        {
            if(number1[i] == '.')
            {
                break;
            }
            else
            {
                result += number1[i];
            }
        }
    }
    else{
        for(let i = 0; i < 6; i++)
        {
            if(number1[i] == '.')
            {
                break;
            }
            else
            {
                result += number1[i];
            }
        }
    }
    console.log("results:" + result);
    return result;
}

function MathTest(number1, number2, sym) {
        let finalNumber;
        if(sym == "+")
        {
            finalNumber = number1;
            finalNumber += number2;
            console.log(finalNumber);
        }
        else if (sym == "-")
        {
            finalNumber  = number1 - number2;
            console.log(finalNumber);
        }
        else if (sym == "*")
        {
            finalNumber  = number1 * number2;
            console.log(finalNumber);
        }
        else if (sym == "/")
        {
            finalNumber  = number1 / number2;
            console.log(finalNumber);
        }
        return finalNumber;
}

function ConvertToD(hex){
        let value;
        value = parseInt(hex, 16);
       
        console.log("D = " + value);
        return value;
}

function ConvertToH(dec){
    let value;
    value = dec.toString(16);
    console.log("H = " + value);
    return value;
}


module.exports = {
        input_check: inputCheck,
        output_check: outputCheck,
        math_test: MathTest,
        convert_to_d: ConvertToD,
        convert_to_h: ConvertToH
};

