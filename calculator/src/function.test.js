
const { input_check, output_check, math_test, convert_to_d, convert_to_h }= require('./function.js');


describe("inputCheck",()=>{
    //maximum 3 input digit
    test("input 2133 should be 'incorrect'",()=>{
        expect(input_check('2133')).toBe('incorrect');
    });
    //checking correct input digit
    test("input 11 should be 'correct'",()=>{
        expect(input_check('A1')).toBe('correct');
    });
    //can not input decimal value
    test("input 1.1 should be 'incorrect'",()=>{
        expect(input_check('1.1')).toBe('incorrect');
    });

    test("input 1.12 should be 'incorrect'",()=>{
        expect(input_check('1.A2')).toBe('incorrect');
    });
});

describe("outputCheck",()=>{
    //checking correct output digits//
    test("output 21337 should be '21337'",()=>{
        expect(output_check('21337')).toBe('21337');
    });
    //remove the extra digits//
    test("output 2133675 should be '213387'",()=>{
        expect(output_check('2133675')).toBe('213367');
    });
    //remove the digits after the decimal point//
    test("output 2133.1 should be '213387'",()=>{
        expect(output_check('2133.1')).toBe('2133');
    });

    test("output 2.143 should be '213387'",()=>{
        expect(output_check('2.143')).toBe('2');
    });
});


describe("MathTest", ()=>{
    test("multiplication of [2,3] should be '6'", ()=>{
        expect(math_test(2,3, "*")).toBe(6);
    })
    test("addition of [2,3] should be '5'", ()=>{
        expect(math_test(2,3, "+")).toBe(5);
    })
    test("subtraction of [7,3] should be '4'", ()=>{
        expect(math_test(7,3, "-")).toBe(4);
    })
    test("division of [2,3] should be '2'", ()=>{
        expect(math_test(6,3, "/")).toBe(2);
    })
})

describe("convertor", ()=> {
    test("convert of [ABC] should be '2748'", ()=>{
        expect(convert_to_d('ABC')).toBe(2748);
    })

    test("convert of [17E] should be '382'", ()=>{
        expect(convert_to_d('17E')).toBe(382);
    })
})

describe("convertor", ()=> {
    test("convert of [2748] should be 'abc'", ()=>{
        expect(convert_to_h(2748)).toBe('abc');
    })

    test("convert of [382] should be '17E'", ()=>{
        expect(convert_to_h(382)).toBe('17e');
    })
})
