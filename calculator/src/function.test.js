
const { input_check, math_test, convert_to_d, convert_to_h }= require('./function.js');


describe("inputCheck",()=>{
    test("input 2133 should be 'incorrect'",()=>{
        expect(input_check('2133')).toBe('incorrect');
    });

    test("input 11 should be 'correct'",()=>{
        expect(input_check('11')).toBe('correct');
    });

    test("input 1.1 should be 'incorrect'",()=>{
        expect(input_check('1.1')).toBe('incorrect');
    });

    test("input 1.12 should be 'incorrect'",()=>{
        expect(input_check('1.12')).toBe('incorrect');
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
