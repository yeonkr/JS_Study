const ATTACK_VALUE = 10; // 전역 값은 대문자로 처리하는 게 일반적. (선택사항)

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife); // 화면 업데이트 

function attackHandler() { // 이벤트리스너를 가리키는 함수 
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
}

attackBtn.addEventListener('click', attackHandler);