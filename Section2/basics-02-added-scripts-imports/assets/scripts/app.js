// 허용되는 이름 : camelCase. 소문자로 시작, 한 단어로 구성된 이름. 단어 내에 공란 없음.
// 대소문자 처리 여부 중요. 
// 변수 이름에는 글자, 숫자 사용 가. 특수문자$도 사용가능. 변수 이름이 $로 시작해도 됨.
// 변수 이름 첫 자리에도 _ 사용 가능. 

// 권장하지 않는 이름 : user_name 
// 변수와 상수의 이름은 숫자로 시작해선 안 됨.
// $, _ 제외한 모든 특수문자는 사용 불가능. -, 공란 허용하지 않음 

const defulatResult = 0; // 전역변수와 상수 및 함수를 함수 내에서 사용할 수는 있지만 로컬 변수나 상수, 함수, 즉 함수 내부에 정의된 변수, 상수 또는 함수는 외부에서 사용이 불가능하다. 
let currentResult = defaultResult; 

function add(num1, num2) {
    result = num1 + num2;  // 함수 본문 내에서만 사용할 수 있는 변수. 중괄호 블록 내에서는 어디든 사용 가능하지만 그외는 불가능. 블록 스코프
    return result; // 함수실행 종료. 하나 이상을 반환할 수는 없음
}

addBtn.addEventListener('click', add); // 그 이름을 가진 함수를 찾아 실행

const addtionResult = add(1, 2); // num1 = 1, num2 =2가 됐음. 함수 호출 결과가 additionResult에 저장됨 
add(5, 5); // num1, num2의 값에 5를 넣어줌. 
// 함수는  필요에 따라 여러개의 매개변수를 가질 수 있다. 
// 그리고 함수는 다른 작업도 수행할 수 있다 (무언가를 반환하는 것도 가능) 


// 중괄호가 있는 함수 선언문 뒤에는 세미콜론을 붙이지 않는다. 
// 하지만 짧은 표현식 뒤에는 세미콜론을 붙인다.
// 함수에 매개변수가 꼭 필요한 건 아님. 입력앖 없이도 작동하는 함수가 있음.

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescruption =  `(${defulatResult} + defaultResult + '+ 10) * 3 / 2 -1`;

outputResult(currentResult, calculationDescruption);

// 해당 변수들 안에 저장된 값을 전달
// 변수 내에 저장된 값을 받음
// 함수가 값을 받으면 이를 HTML페이지에 출력함

//-------------------------------------------------//
// addBtn.addEventListener();


