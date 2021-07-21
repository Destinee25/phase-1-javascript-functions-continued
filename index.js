// Your code here

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
};
saturdayFun('bathe my dog');

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
};
saturdayFun('work from home');

function wrapAdjective(compliment = "*") {
    function innerFunction (adj = 'special'){
       return `You are ${compliment}${adj}${compliment}!`
    }
        return innerFunction;
    }

//wrapAdjective(innerFunction + "a dedicated programmer");


// function wrapAdjective(flair="*"){
//     (adj="Special") => `You are ${flair + adj + flair}!`
// }