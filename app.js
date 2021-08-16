let quizData = [{
    question : "Which type of JavaScript language is",
    a: 'Object-Oriented',
    b: 'Object-Based',
    c: 'Assembly-language',
    d: 'High-level',
    correct: 'b',
    },
    {
        question : "Which one of the following also known as Conditional Expression",
        a: 'Alternative to if-else',
        b: 'Switch statement',
        c: 'If-then-else statement',
        d: 'if',
        correct: 'd',
    },
    {
        question : "In JavaScript, what is a block of statement?",
        a: 'Conditional block',
        b: 'block that combines a number of statements into a single compound statement',
        c: 'both conditional block and a single statement',
        d: 'block that contains a single statement',
        correct: 'b',
    },
    {
        question : "When interpreter encounters an empty statements, what it will do:",
        a: 'Shows a warning',
        b: 'Prompts to complete the statement',
        c: 'Throws an error',
        d: 'Ignores the statements',
        correct: 'd',
    },
    {
        question : `The "function" and " var" are known as:`,
        a: 'Keywords',
        b: 'Data types',
        c: 'Declaration statements',
        d: 'Prototypes',
        correct: 'c',
    },
    // {
    //     question : " Which of the following variables takes precedence over the others if the names are the same?",
    //     a: 'Global variable',
    //     b: 'The local element',
    //     c: 'The two of the above',
    //     d: 'None of the above',
    //     correct: 'b',
    // },
    // {
    //     question : " Which one of the following is the correct way for calling the JavaScript code?",
    //     a: 'Preprocessor',
    //     b: 'Triggering Event',
    //     c: 'RMI',
    //     d: 'Function/Method',
    //     correct: 'd',
    // },
    // {
    //     question : "Which of the following type of a variable is volatile?",
    //     a: 'Mutable variable',
    //     b: 'Dynamic variable',
    //     c: 'Volatile variable',
    //     d: 'Immutable variable',
    //     correct: 'a',
    // },
    // {
    //     question : "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
    //     a: 'Prints an exception error',
    //     b: 'Prints an overflow error',
    //     c: `Displays "Infinity"`,
    //     d: 'Prints the value as such',
    //     correct: 'c',
    // },
    // {
    //     question : " In the JavaScript, which one of the following is not considered as an error:",
    //     a: 'Syntax error',
    //     b: 'Missing of semicolons',
    //     c: 'Division by zero',
    //     d: 'Missing of Bracket',
    //     correct: 'c',
    // },
    // {
    //     question : "Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
    //     a: 'toExponential()',
    //     b: 'toFixed()',
    //     c: 'toPrecision()',
    //     d: 'toLocaleString()',
    //     correct: 'b',
    // },
    // {
    //     question : "Which of the following number object function returns the value of the number?",
    //     a: 'toString()',
    //     b: 'valueOf()',
    //     c: 'toLocaleString()',
    //     d: 'toPrecision()',
    //     correct: 'b',
    // },
    // {
    //     question : "Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
    //     a: 'slice()',
    //     b: 'split()',
    //     c: 'substr()',
    //     d: 'search()',
    //     correct: 'c',
    // },
    // {
    //     question : `In JavaScript the x===y statement implies that:`,
    //     a: 'Both are x and y are equal in value only.',
    //     b: 'Both are equal in the value and data type.',
    //     c: 'Both x and y are equal in value, type and reference address as well.',
    //     d: 'Both are not same at all.',
    //     correct: 'b',
    // },
    // {
    //     question : "In JavaScript, what will be used for calling the function definition expression:",
    //     a: 'Function prototype',
    //     b: 'Function literal',
    //     c: 'Function calling',
    //     d: 'Function declaration',
    //     correct: 'b',
    // },
];

let questionEl = document.getElementById('question');
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submitbtn = document.getElementById("submitbtn")

let currentQuiz = 0;

loadQuiz()

function loadQuiz(){
    let currentQuizdata = quizData[currentQuiz];

    questionEl.innerText = currentQuizdata.question
    a_text.innerText = currentQuizdata.a;
    b_text.innerText = currentQuizdata.b;
    c_text.innerText = currentQuizdata.c;
    d_text.innerText = currentQuizdata.d;

}


submitbtn.addEventListener('click', ()=>{
    if(currentQuiz < quizData.length-1){
        isCheck()
        // currentQuiz++
        // console.log(currentQuiz)
        // document.getElementById("a").checked = false
        // document.getElementById("b").checked = false
        // document.getElementById("c").checked = false
        // document.getElementById("d").checked = false
        // loadQuiz()
    }
    else if(currentQuiz == 4){
        submitbtn.innerText = "Submit"
        submitbtn.style.backgroundColor = "Green"
        isCheck()
        // currentQuiz++
        // document.getElementById("a").checked = false
        // document.getElementById("b").checked = false
        // document.getElementById("c").checked = false
        // document.getElementById("d").checked = false
        // loadQuiz()
    }
    else{
        alert("You Finished")
    }
})

function isCheck(){
    let radio = document.getElementsByClassName("radioButton")
    console.log(radio)
    if(radio.a.checked == true){
        currentQuiz++
        loadQuiz()
        clearResponse()
    }else if(radio.b.checked == true){
        currentQuiz++
        loadQuiz()
        clearResponse()
    }else if(radio.c.checked == true){
        currentQuiz++
        loadQuiz()
        clearResponse()
    }else if(radio.d.checked == true){
        currentQuiz++
        loadQuiz()
        clearResponse()
    }
    else
    {
        alert("Check one option")
    }
}

function clearResponse(){
    document.getElementById("a").checked = false
    document.getElementById("b").checked = false
    document.getElementById("c").checked = false
    document.getElementById("d").checked = false
}