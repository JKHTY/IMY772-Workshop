function inputCheck(number1){
        let result = [];
        console.log(number1.length);
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
       
        console.log(value);
        return value;
}

function ConvertToH(dec){
    let value;
    value = Math.abs(dec).toString(16);
    console.log(value);
    return value;
}


module.exports = {
        input_check: inputCheck,
        math_test: MathTest,
        convert_to_d: ConvertToD,
        convert_to_h: ConvertToH
};

