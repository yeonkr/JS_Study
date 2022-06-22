// 허용되는 이름 : camelCase. 소문자로 시작, 한 단어로 구성된 이름. 단어 내에 공란 없음.
// 대소문자 처리 여부 중요. 
// 변수 이름에는 글자, 숫자 사용 가. 특수문자$도 사용가능. 변수 이름이 $로 시작해도 됨.
// 변수 이름 첫 자리에도 _ 사용 가능. 

// 권장하지 않는 이름 : user_name 
// 변수와 상수의 이름은 숫자로 시작해선 안 됨.
// $, _ 제외한 모든 특수문자는 사용 불가능. -, 공란 허용하지 않음 

// const defulatResult = 0; // 전역변수와 상수 및 함수를 함수 내에서 사용할 수는 있지만 로컬 변수나 상수, 함수, 즉 함수 내부에 정의된 변수, 상수 또는 함수는 외부에서 사용이 불가능하다. 
// let currentResult = defaultResult; 

// function add(num1, num2) {
//     result = num1 + num2;  // 함수 본문 내에서만 사용할 수 있는 변수. 중괄호 블록 내에서는 어디든 사용 가능하지만 그외는 불가능. 블록 스코프
//     return result; // 함수실행 종료. 하나 이상을 반환할 수는 없음
// }

// addBtn.addEventListener('click', add); // 그 이름을 가진 함수를 찾아 실행

// const addtionResult = add(1, 2); // num1 = 1, num2 =2가 됐음. 함수 호출 결과가 additionResult에 저장됨 
// add(5, 5); // num1, num2의 값에 5를 넣어줌. 
// // 함수는  필요에 따라 여러개의 매개변수를 가질 수 있다. 
// // 그리고 함수는 다른 작업도 수행할 수 있다 (무언가를 반환하는 것도 가능) 


// // 중괄호가 있는 함수 선언문 뒤에는 세미콜론을 붙이지 않는다. 
// // 하지만 짧은 표현식 뒤에는 세미콜론을 붙인다.
// // 함수에 매개변수가 꼭 필요한 건 아님. 입력앖 없이도 작동하는 함수가 있음.

// currentResult = (currentResult + 10) * 3 / 2 - 1;

// let calculationDescruption =  `(${defulatResult} + defaultResult + '+ 10) * 3 / 2 -1`;

// outputResult(currentResult, calculationDescruption);

// 해당 변수들 안에 저장된 값을 전달
// 변수 내에 저장된 값을 받음
// 함수가 값을 받으면 이를 HTML페이지에 출력함

//-------------------------------------------------//
// addBtn.addEventListener();

// "간접적" vs "직접적" 함수실행 
// add() vs add
// 이름으로 정의된 함수(add)를 호출할 때 괄호를 추가한다. 
// 하지만, 함수를 바로 실행하고 싶지 않다면(미래의 어느시점에 실행하고 싶다면) 함수를 직접 호출하는 대신 함수 이름을 제공한다
// ex) someButton.addEventListener('click', add); // 이 버튼이 클릭되면 add를 실행하라.

// function greetUser(name) { // 키워드 , 함수 이름, 매개변수
//     alert('Hi ' + name); // 함수 본문
// }
// "섀도우 변수" : 함수에서 선언된 지역 변수면서 전역 변수로도 존재하는 변수. 전역 변수로도 존재하는 지역 변수(즉, 함수에서 생성된)

//-------------------------------------------------//

const defulatResult = 0;
let currentResult = defulatResult;
let logEntries = []; // 전역변수 생성.

function getUserNumberInput() {
    return parent(userInput.value);
}
function createAndWriteOutput(operator, resultBefolrCalc, calcNumber) {
    const calcDescription = `${resultBefolrCalc} ${operator} ${calcNumber}`; // 출력 텍스트일뿐.
    outputResult(currentResult, calcDescription);
}
function writeToLog(
    operationIdentifier, 
    prevResult, 
    operationNumber, 
    newResult
    ){
    const logEntry = {operation: operationIdentifier, prevResult: prevResult, number: enteredNumber, result: newResult}; 
    logEntries.push(logEntry); // 새로운 요소를 배열로 푸쉬함. 목록에 새로운 요소를 더해줌. 
    console.log(logEntries); 
    }

function add() {
    const enteredNumber = getUserNumberInput(); 
    const initialResult = currentResult;
    currentResult += enteredNumber;
    // currentResult-- // ++도 가능. 이걸 변수 앞에 붙이면 연산이 수정된 값을 반환함.
    createAndWriteOutput('+', initialResult, enteredNumber)
    const logEntry = {operation: 'ADD', prevResult: initialResult, number: enteredNumber, result: currentResult}; 
    writeToLog('ADD', initialResult, enteredNumber, currentResult)
    // currentResult = currentResult + parseInt(userInput.value); // 문자열로 변환하고 문자열로 접합. // parseInt : 텍스트, 즉 문자열을 소수점 이하 숫자가 없는 수로 구문분석 하는 함수. pareFloat 소수점 아래자리가 있는 수로 분석 
}


function subtract() {
    const enteredNumber = getUserNumberInput();  // 상수나 변수 또는 함수 안에 정의한 상수는 단일 함수에 속하므로 따라서 이 두함수는 서로 분리되어 있다. 이름이 재사용된 상태가 아니고 여러 함수에서 사용할 수 있음. 
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult) 
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', add); 
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', subtract);
